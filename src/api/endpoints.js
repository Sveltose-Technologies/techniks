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
