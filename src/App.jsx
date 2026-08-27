import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VisualGrid from './components/VisualGrid';
import ProductMasterPage from './components/ProductMasterPage';
import FeedbackSystem from './components/FeedbackSystem';
import AdminPortal from './components/AdminPortal';
import AuthModal from './components/AuthModal';
import { LegalModal, VideoModal } from './components/LegalModal';
import InteractiveGadgetBackground from './components/InteractiveGadgetBackground';
import { INITIAL_GADGETS, INITIAL_REVIEWS, INITIAL_VALIDATIONS } from './data/gadgetsData';

export default function App() {
  const [view, setView] = useState('homepage');
  const [selectedGadgetId, setSelectedGadgetId] = useState('tecno-camon-30-premier');

  // Defensive User State
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('gadget_life_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Modal States
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Defensive Data States
  const [vendorReviews, setVendorReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('gadget_life_reviews');
      return saved ? JSON.parse(saved) : (INITIAL_REVIEWS || []);
    } catch (e) {
      return INITIAL_REVIEWS || [];
    }
  });

  const [productValidations, setProductValidations] = useState(() => {
    try {
      const saved = localStorage.getItem('gadget_life_validations');
      return saved ? JSON.parse(saved) : (INITIAL_VALIDATIONS || []);
    } catch (e) {
      return INITIAL_VALIDATIONS || [];
    }
  });

  useEffect(() => {
    try {
      if (user) localStorage.setItem('gadget_life_user', JSON.stringify(user));
      else localStorage.removeItem('gadget_life_user');
    } catch (e) {}
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('gadget_life_reviews', JSON.stringify(vendorReviews));
    } catch (e) {}
  }, [vendorReviews]);

  useEffect(() => {
    try {
      localStorage.setItem('gadget_life_validations', JSON.stringify(productValidations));
    } catch (e) {}
  }, [productValidations]);

  const activeGadget = (INITIAL_GADGETS && INITIAL_GADGETS.find(g => g.id === selectedGadgetId)) || 
                       (INITIAL_GADGETS && INITIAL_GADGETS[0]) || 
                       {};

  const openGadgetDetail = (id) => {
    setSelectedGadgetId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Interactive Floating 3D/CSS Gadgets Background */}
      <InteractiveGadgetBackground />

      {/* Main Content Container Layered Above Background */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header 
          view={view}
          setView={setView}
          user={user}
          setUser={setUser}
          setShowAuthModal={setShowAuthModal}
        />

        <main style={{ flex: 1, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '24px 20px' }}>
          {view === 'homepage' && (
            <VisualGrid 
              gadgets={INITIAL_GADGETS || []} 
              openGadgetDetail={openGadgetDetail} 
            />
          )}

          {view === 'detail' && activeGadget && activeGadget.id && (
            <ProductMasterPage 
              gadget={activeGadget}
              user={user}
              setShowAuthModal={setShowAuthModal}
              setShowVideoModal={setShowVideoModal}
              vendorReviews={vendorReviews || []}
              setVendorReviews={setVendorReviews}
              productValidations={productValidations || []}
              setProductValidations={setProductValidations}
              backToGrid={() => setView('homepage')}
            />
          )}

          {view === 'feedback' && (
            <FeedbackSystem 
              vendorReviews={vendorReviews || []} 
              productValidations={productValidations || []} 
            />
          )}

          {view === 'admin' && (
            <AdminPortal 
              gadgets={INITIAL_GADGETS || []}
              vendorReviews={vendorReviews || []}
              productValidations={productValidations || []}
            />
          )}
        </main>

        <Footer 
          onOpenLegalModal={() => setShowLegalModal(true)} 
          onOpenAdmin={() => {
            setView('admin');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>

      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showLegalModal && (
        <LegalModal 
          onClose={() => setShowLegalModal(false)} 
        />
      )}

      {showVideoModal && activeGadget && (
        <VideoModal 
          onClose={() => setShowVideoModal(false)}
          gadget={activeGadget}
        />
      )}
    </div>
  );
}
