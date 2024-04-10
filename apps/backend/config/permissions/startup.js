const public = {
  "api::project.project": ["find", "findOne"],
  "api::category.category": ["find", "findOne"],
};

const authenticated = {
  ...public,
};

module.exports = {
  authenticated,
  public,
};
