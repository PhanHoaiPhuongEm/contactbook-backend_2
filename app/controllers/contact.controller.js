let contacts = [];

exports.create = (req, res) => {
  const contact = {
    id: Date.now().toString(),
    ...req.body,
  };
  contacts.push(contact);
  res.send(contact);
};

exports.findAll = (req, res) => {
  res.send(contacts);
};

exports.findAllFavorite = (req, res) => {
  const favorite = contacts.filter(c => c.favorite === true);
  res.send(favorite);
};

exports.findOne = (req, res) => {
  const contact = contacts.find(c => c.id === req.params.id);
  res.send(contact || {});
};

exports.update = (req, res) => {
  contacts = contacts.map(c =>
    c.id === req.params.id ? { ...c, ...req.body } : c
  );
  res.send({ message: "Updated successfully" });
};

exports.delete = (req, res) => {
  contacts = contacts.filter(c => c.id !== req.params.id);
  res.send({ message: "Deleted successfully" });
};

exports.deleteAll = (req, res) => {
  contacts = [];
  res.send({ message: "Deleted all contacts" });
};