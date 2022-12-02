export const actions = {
  async subscribe({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`newsletter`, payload)
        .then(({ data }) => {
          resolve(data.message);
        })
        .catch((error) => reject(error.response.data.message));
    });
  },
};
