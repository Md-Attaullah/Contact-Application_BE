const Contact = require("../models/contactDetails.model")


exports.getAllContact = (req, res) => {
    Contact.find()
        .then((Contact) => res.json(Contact))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Contact not found", error: err.message })
        );
};

exports.getContactById = (req, res) => {
    Contact.findById(req.params.id, req.body)
        .then((data) => res.json({ message: "Contact Details By Id", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

exports.postCreateContact = (req, res) => {
    Contact.create(req.body)
        .then((data) => res.json({ message: "Contact added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Contact", error: err.message })
        );
};

exports.putUpdateContact = (req, res) => {
        Contact.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => res.json({ message: "updated successfully", data }))
            .catch((err) =>
                res
                    .status(400)
                    .json({ message: "Failed to update todo", error: err.message })
            );
    };

exports.deleteContact = (req, res) => {
        Contact.findByIdAndDelete(req.params.id, req.body)
            .then((data) =>
                res.json({ message: "todo deleted successfully", data })
            )
            .catch((err) =>
                res
                    .status(404)
                    .json({ message: "book not found", error: err.message })
            );
    };