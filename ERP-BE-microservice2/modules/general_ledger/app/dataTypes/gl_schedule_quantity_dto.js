const GlWipUsage = require('./gl_wip_usage_dto');

const GlScheduleQuantityDTO = {
    Ending_Stock_Unit: parseInt(0),
    Ending_Stock_Usage: GlWipUsage,
    Loss_In_Process: parseInt(0),
    Opening_Stock_Unit: GlWipUsage,
    PO_Number: parseInt(0),
    Start_In_Period: parseInt(0),
    Transfered_To_Next_Department: parseInt(0),
    wc_id: '',
};
