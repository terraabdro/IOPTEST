// Utility function to check if a user is an admin
const isAdmin = (telegramId) => {
  const adminIds = [process.env.ADMIN_ID_1, process.env.ADMIN_ID_2];
  return adminIds.includes(telegramId);
};

module.exports = isAdmin;
