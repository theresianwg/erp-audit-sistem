const GlWipCostDistributionDetailDTO = require('./gl_wip_cost_distribution_detail_dto');

const GlWipCostDistribution = {
    Beginning_Direct_Labour: GlWipCostDistributionDetailDTO,
    Beginning_Overhead: GlWipCostDistributionDetailDTO,
    Beginning_Raw_Material: GlWipCostDistributionDetailDTO,
    Ending_Direct_Labour: GlWipCostDistributionDetailDTO,
    Ending_Overhead: GlWipCostDistributionDetailDTO,
    Ending_Raw_Material: GlWipCostDistributionDetailDTO,
    Opening_Cost: parseFloat(0),
    po_id: '',
    Process_Cost_In_Period: GlWipCostDistributionDetailDTO,
    wc_id: '',
};
