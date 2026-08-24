import api from './axios';

export const contactAPI = {
  getContactContent: async () => {
    const response = await api.get('/contact-us-content/get-all');
    return response.data;
  },
  submitContactForm: async (formData) => {
    const response = await api.post('/contact-us-form/create', formData);
    return response.data;
  }
};

export const aboutUsAPI = {
  getAboutUsContent: async () => {
    const response = await api.get('/about-us/get-all');
    return response.data;
  }
};

export const footerAPI = {
  getFooterContent: async () => {
    const response = await api.get('/footer/get-all');
    return response.data;
  }
};

export const servicesAPI = {
  getBannerContent: async () => {
    const response = await api.get('/what-we-do-banner/get-all');
    return response.data;
  }
};

export const homeAPI = {
  getHomeHeaderContent: async () => {
    const response = await api.get('/home-header-content/get-all');
    return response.data;
  },
  getHomeHeroSection: async () => {
    const response = await api.get('/home-hero-section/get-all');
    return response.data;
  },
  getHomeContent: async () => {
    const response = await api.get('/home-content/get-all');
    return response.data;
  }
};

export const whyChooseUsAPI = {
  getWhyChooseBanner: async () => {
    const response = await api.get('/why-choose-techniks-banner/get-all');
    return response.data;
  },
  getWhyChooseData: async () => {
    const response = await api.get('/why-choose-techniks/get-all');
    return response.data;
  }
};
