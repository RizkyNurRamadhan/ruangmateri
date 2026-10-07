export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';

export const handleImageError = (e) => {
  if (e && e.currentTarget && e.currentTarget.src !== FALLBACK_IMAGE) {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGE;
  }
};
