// const jobOrderService = require('../services/mf_jobOrderService');

// class JobOrderController {
//     async getJobOrderbyId(req, res) {
//         try {
//             const purchaseRequest =
//                 await jobOrderService.getJobOrderbyId(
//                     req.params.id,
//                 );
//             res.status(200).json(purchaseRequest);
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     }

//     async createJobOrder(req, res) {
//         try {
//             const newJobOrderId = await jobOrderService.createJobOrder(
//                 req.body,
//             );
//             res.status(200).json(newJobOrderId);
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     }
// }

// module.exports = new JobOrderController();

const jobOrderService = require('../services/mf_jobOrderService');

class JobOrderController {
    async getAll(req, res) {
        await jobOrderService
            .getAllJobOrder()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Machine not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Machine list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine retrieved failed',
                    data: err,
                });
            });
    }

    async getDetail(req, res) {
        const { id } = req.params;
        await jobOrderService
            .getJobOrderDetail(id)
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Machine not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Machine list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await jobOrderService
            .getJobOrderbyId(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Machine not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Machine retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newJobOrder = await jobOrderService.createJobOrder(req.body);
            res.status(200).json(newJobOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const jobOrderDetail = req.body;
        await jobOrderService
            .updateJobOrderDetail(id, jobOrderDetail)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Machine updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine updated failed',
                    data: err,
                });
            });
    }

    // async delete(req, res) {
    //     const { id } = req.params;
    //     await jobOrderService
    //         .delete(id)
    //         .then((data) => {
    //             res.status(200).json({
    //                 status: 'success',
    //                 message: 'Machine deleted successfully',
    //                 data: data,
    //             });
    //         })
    //         .catch((err) => {
    //             res.status(500).json({
    //                 status: 'error',
    //                 message: 'Machine deleted failed',
    //                 data: err,
    //             });
    //         });
    // }
}

module.exports = new JobOrderController();
