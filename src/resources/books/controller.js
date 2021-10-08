const db = require("../../utils/database");

const createOne = async (req, res) => {
  console.log("Books Router [CREATE]", { body: req.body });

  const bookToCreate = {
    ...req.body
  };

  const createOneSQL = `
    INSERT INTO books
      (title, author, type, topic, publicationDate)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const { title, author, type, topic, publicationDate } = bookToCreate;

  try {
    const result = await db.query(createOneSQL, [
      title,
      author,
      type,
      topic,
      publicationDate
    ]);

    res.json({ data: result.rows[0] });
  } catch (error) {
    console.error("[ERROR] createOne: ", { error: error.message });

    res.status(500).json({ error: error.message });
  }
};

 function getAllBooks(req, res) {
  console.log("inisde getAllBooks");

  // res.json({ data : "works" });

  const getAll = `
  SELECT *
  FROM books  
  `;

  db.query(getAll)
  .then(result => res.json({data : result.rows}))
  .catch(console.error);

 }


module.exports = {
  createOne, getAllBooks
};
