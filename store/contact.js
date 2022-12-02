export const actions = {
  async contact({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`contact`, payload)
        .then(({ data }) => {
          resolve(data.message);
        })
        .catch((error) => reject(error.response.data.message));
    });
  },
};
