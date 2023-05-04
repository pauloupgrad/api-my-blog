const soma = (req, res) => {
    const soma = 10 + 1

    res.send({soma: soma})
}

module.exports = { soma }