import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';

import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"

export default function BalanceSheet(){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';
    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>ITS ERP - Account Payable</title>
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <ModuleSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
                <div className="p-5 flex flex-col flex-wrap content-center">
                    <table cellPadding={0} border={0} style={{ emptyCells:"show", width:"595px", borderCollapse: "collapse" }}>
                        <tbody>
                            <tr style={{ height: '0', verticalAlign:'top' }}>
                                <td style={{ width: '28px' }}></td>
                                <td style={{ width: '74px' }}></td>
                                <td style={{ width: '250px' }}></td>
                                <td style={{ width: '10px' }}></td>
                                <td style={{ width: '120px' }}></td>
                                <td style={{ width: '35px' }}></td>
                                <td style={{ width: '50px' }}></td>
                                <td style={{ width: '28px' }}></td>
                            </tr>
                            <tr style={{ height: '28px', verticalAlign:'top' }}>
                                <td colSpan={8}></td>
                            </tr>
                            <tr style={{ height: '17px', verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6}
                                    style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'center' }}>
                                    <span
                                        style={{ fontFamily: 'Courier', color: '#000000', fontSize: '12px', lineHeight: '1.0078125' }}>PT
                                        ERP ITS</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '23px', verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6}
                                    style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'center' }}>
                                    <span
                                        style={{ fontFamily: 'Arial', color: '#990033', fontSize: '18px', lineHeight: '1.1499023', fontWeight: 'bold' }}>Neraca
                                        (Standar)</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '16px', verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6}
                                    style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'center' }}>
                                    <span
                                        style={{ fontFamily: 'Courier', color: '#000000', fontSize: '11px', lineHeight: '1.0078125' }}>Per Tgl. [Tanggal]</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '12px', verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6}
                                    style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'center' }}>
                                    <span
                                        style={{ fontFamily: 'Courier', color: '#000000', fontSize: '11px', lineHeight: '1.0078125' }}>Cabang
                                        : [Semua Cabang]</span>
                                    <span
                                    style={{ fontFamily: 'Courier', color: '#000000', fontSize: '11px', lineHeight: '1.0078125', marginLeft: '40px'}}>
                                    Mata Uang : Indonesian Rupiah</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{height:"20px", verticalAlign: 'top'}}>
                                <td colSpan={8}>
                                </td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    borderBottom: '1px solid #003366', paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',}}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#003366',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}>
                                        Deskripsi
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    borderBottom: '1px solid #003366',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                    }}>
                                    <span style={{fontFamily: 'Arial',color: '#003366',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}>
                                        Nilai
                                    </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '5px',verticalAlign:'top' }}>
                                <td colSpan={8}></td>
                            </tr>
                            {/* ASET */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}>
                                        ASET
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}></td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* ASET Lancar */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; ASET LANCAR {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Kas dan Setara Kas
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Kas dan Setara Kas
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top'}}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Piutang Usaha
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Piutang Usaha
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr> 
                            {/* White Space */}
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top'}}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Persediaan
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Persediaan
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr> 
                            <tr style={{ height: '14px',verticalAlign:'top'}}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top'}}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Aset Lancar Lainnya
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Aset Lancar Lainnya
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr> 
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; Jumlah Aset Lancar {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* End Aset Lancar */}
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* Start Aset Tidak Lancar */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; ASET TIDAK LANCAR {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Nilai Histori
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Nilai Historis
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Akumulasi Penyusutan
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px', verticalAlign: 'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Akumulasi Penyusutan
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; Jumlah Aset Tidak Lancar {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* End Aset Tidak Lancar */}
                            {/* Start Aset Lainnya */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; ASET Lainnya {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; Jumlah Aset Lainnya {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* End Aset Lainnya */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}>
                                        Jumlah ASET
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* End Aset */}
                            {/* White Space */}
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '3px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* Liabilitas dan Ekuitas */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}>
                                        Liabilitas dan Ekuitas
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}></td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* Liabilitas */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; LiABILITAS {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* Start Liabilitas Jangka Pendek */}
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; LIABILITAS JANGKA PENDEK
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Utang Usaha
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Utang
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* White Space */}
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Kewajiban Jangka Pendek Lainnya
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Kewajiban Jangka Pendek Lainnya
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* End Liabilitas Jangka Pendek */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; &nbsp; Jumlah Kewajiban Jangka Pendek {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* White Space */}
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* Start Liabilitas Jangka Panjang */}
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; LIABILITAS JANGKA PANJANG
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Jumlah Kewajiban Jangka Panjang
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* End Liabilitas Jangka Panjang */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; &nbsp; Jumlah Kewajiban Jangka Panjang {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* White Space */}
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* Ekuitas */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; EKUITAS {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* End Ekuitas */}
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        &nbsp; &nbsp; Jumlah Ekuitas {/* &nbsp buat tab */}
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}>
                                        JUMLAH LIABILITAS DAN EKUITAS
                                    </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    0
                                </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* White Space */}
                            <tr style={{ height: '14px', verticalAlign:'top' }}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}
                                ></td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '3px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                ></td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '10px',verticalAlign:'top' }}>
                                <td colSpan={8}></td>
                            </tr>
                            <tr style={{ height: '1px',verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6} style={{ borderTop: '1px solid #666666' }}></td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '13px',verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6} style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Courier', color: '#000000', fontSize: '8px', lineHeight: '1.0078125' }}>ITS ERP System Report</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '13px',verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6} style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', textIndent: '0px', textAlign: 'left' }}>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '13px',verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6} style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'left' }}>
                                    <span style={{ fontFamily: 'Courier', color: '#000000', fontSize: '8px', lineHeight: '1.0078125' }}>Tercetak pada [Tanggal] - [Jam:Menit]</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '13px',verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={5} style={{ width: '489px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'right' }}>
                                    <span style={{ fontFamily: 'Courier', color: '#000000', fontSize: '8px', lineHeight: '1.0078125' }}>Halaman 1</span>
                                </td>
                                <td style={{ width: '50px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'left' }}>
                                    <span style={{ fontFamily: 'Courier', color: '#000000', fontSize: '8px', lineHeight: '1.0078125' }}>&nbsp;dari 1</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '28px',verticalAlign:'top' }}>
                                <td colSpan={8}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}