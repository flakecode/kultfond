const public = {
  "api::project.project": ["find", "findOne"],
};

const authenticated = {
  ...public,
};

module.exports = {
  authenticated,
  public,
};
