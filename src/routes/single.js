export default data => (req, res) => {

  const id = parseInt(req.params.id, 10);

  const item = data.find(row => row.id === id);

  if (!item) {
    res
      .status(404)
      .json({
        error: 'Not found',
      });
  }

  res
    .status(200)
    .json(item);
}
