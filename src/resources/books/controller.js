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
    // console.log("inisde getAllBooks: ", req.body);
    // res.json({ lemon : true })
    
    const getAll = `
    SELECT *
    FROM books
    `;

    // console.log("res: ", res)

    db.query(getAll)
    .then((result) => res.json({data : result.rows}))
    .catch(console.error);
  }


  function getBookById (req, res) {
    // console.log("getBookById res: ", res)

    const idToGet = req.parmas.id;

    const getOneById = `
    SELECT *
    FROM books
    WHERE id = $1;
    `

    db.query(getOneById, [idToGet])
    .then((result) => res.json({ data: result.rows[0] }))
    .catch(console.error);
}

// const getAllBooks = async (req, res)  => {
//   console.log("Books Router [READ]", {body: req.body})
  
//   const getAllSQL = `
//   SELECT *
//   FROM books
//   `;
//   try {
//   const result = await db.query(getAllSQL)
//   res.json ({data: result.rows})
//   } catch (error) {
//       console.error ("[ERROR getAllBooks: ", {error: error.message});
  
//       res.status(500).json({ error: error.message });
//     }
//   }


module.exports = {
  createOne
  , getAllBooks,
  getBookById
};
