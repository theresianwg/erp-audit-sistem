import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"

export default function IncomeStatement(){
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
                                        style={{ fontFamily: 'Arial', color: '#990033', fontSize: '18px', lineHeight: '1.1499023', fontWeight: 'bold' }}>Laba/Rugi
                                        (Standar)</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr style={{ height: '16px', verticalAlign:'top' }}>
                                <td></td>
                                <td colSpan={6}
                                    style={{ paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '539px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'center' }}>
                                    <span
                                        style={{ fontFamily: 'Courier', color: '#000000', fontSize: '11px', lineHeight: '1.0078125' }}>Dari
                                        ..... s/d .....</span>
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
                                        [Tanggal]
                                    </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '5px',verticalAlign:'top' }}>
                                <td colSpan={8}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top'  }}>
                                <td colSpan={2}></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}>
                                    <span style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}>
                                        PENDAPATAN
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',textIndent: '0px',textAlign: 'left',
                                }}></td>
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
                                        Jumlah Pendapatan
                                    </span>
                                </td>
                                <td></td>
                                <td style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}>
                                    <span style={{
                                        fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                        }}>
                                        0
                                    </span>
                                </td>
                                <td colSpan={3}></td>
                            </tr>
                            <tr style={{ height: '14px',verticalAlign:'top' }}>
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
                                    BEBAN POKOK PENJUALAN
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
                                    Jumlah Beban Pokok Penjualan
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
                                    LABA KOTOR
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
                            <tr style={{ height: '14px', verticalAlign: 'top'}}>
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
                                    BEBAN OPERASIONAL
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
                            <tr style={{ height: '14px',verticalAlign:'top'}}>
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
                                    Jumlah Beban Operasional
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000', paddingTop: '3px', paddingLeft: '5px', paddingRight: '5px', width: '120px', wordWrap: 'break-word', whiteSpace: 'nowrap', textIndent: '0px', textAlign: 'right',
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
                            <tr style={{ height: '14px',verticalAlign:'top'}}>
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
                                    PENDAPATAN OPERASIONAL
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
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
                            <tr style={{ height: '14px',verticalAlign:'top'}}>
                                <td colSpan={2}></td>
                                <td
                                style={{
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    PENDAPATAN DAN BEBAN NON OPERASIONAL
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
                            <tr style={{ height: '14px',verticalAlign:'top'}}>
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
                                    &nbsp; &nbsp; Pendapatan Non Operasional
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
                            <tr style={{ height: '14px',verticalAlign:'top'}}>
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
                                    &nbsp; &nbsp; Jumlah Pendapatan Non Operasional
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
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    &nbsp; &nbsp; Beban Non Operasional
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
                            <tr style={{ height: '14px',verticalAlign:'top'}}>
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
                                    &nbsp; &nbsp; Jumlah Beban Non Operasional
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
                                    fontFamily: 'Arial', color: '#000000', fontSize: '9px', lineHeight: '1.1499023', fontWeight: 'bold',
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
                                    paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '250px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'left',
                                }}
                                >
                                <span
                                    style={{
                                    fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
                                    }}
                                >
                                    Jumlah Pendapatan dan Beban Non Operasional
                                </span>
                                </td>
                                <td></td>
                                <td
                                style={{
                                    borderTop: '1px solid #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
                                }}
                                >
                                <span
                                    style={{fontFamily: 'Arial',color: '#000000',fontSize: '9px',lineHeight: '1.1499023',fontWeight: 'bold',
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
                                    LABA BERSIH
                                    </span>
                                </td>
                                <td></td>
                                <td
                                    style={{
                                    borderTop: '1px solid #000000',borderBottom: '2px double #000000',paddingTop: '3px',paddingLeft: '5px',paddingRight: '5px',width: '120px',wordWrap: 'break-word',whiteSpace: 'nowrap',textIndent: '0px',textAlign: 'right',
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
                            <tr style={{ height: '50px',verticalAlign:'top' }}>
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
