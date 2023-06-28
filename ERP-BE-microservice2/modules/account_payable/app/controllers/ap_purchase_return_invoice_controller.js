const apPurchaseReturnInvoiceService = require('../services/ap_purchase_return_invoice_service');

module.exports = {
    create: async (req, res) => {
        try {
            const data = req.body;
            const result = await apPurchaseReturnInvoiceService.create(data);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const result = await apPurchaseReturnInvoiceService.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    findById: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await apPurchaseReturnInvoiceService.findOne(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const result = await apPurchaseReturnInvoiceService.update(
                id,
                data,
            );
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await apPurchaseReturnInvoiceService.delete(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};
