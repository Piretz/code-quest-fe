const token = localStorage.getItem("authToken");
const headers = {
  Authorization: `Bearer ${token}`,
};
