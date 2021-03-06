// register the grid component
Vue.component('grid', {
    template: '#grid-template',
    props: {
        data: Array,
        columns: Array
    }
});

const ERRORS = {
    required: 'This field is required.',
    minLength: 'The length should be minimum 8 characters.',
    invalidEmail: 'This is not a valid email address.',
    invalidTel: 'This is not a valid Telephone Number.'
}
var app = new Vue({
    el: '#root',
    data: {
        referrer_id: '',
        staff_referrer_id: '',
        product_sku: '',
        ppercentage: '',
        product_price: '',
        twproduct_price: '',
        frproduct_price: '',
        first_payment: '',
        product_name: '',
        repayment: '',
        errorMessage: "",
        successMessage: "",
        search: '',
        errorMessageChk: '',
        successMessageChk: '',
        CheckCusId: "",
        errorMessage: "",
        successMessage: "",
        List_orders: [],
        repay: {},
        Employee_id: '',
        Access_code: '',
        access_granted: false,
        idchecked: false,
        access_granted2: false,
        access_granted3: false,
        access_granted4: false,
        idchecked2: false,
        feature: 'lookup',
        feature2: 'purchaselog',
        feature3: 'repaymentlog',
        feature4: 'productlog',
        submitted: false,
        submition: false,
        dataloaded: false,
        Customer_id: '',
        CustName: '',
        address: '',
        phoneNo: '',
        Regdate: '',
        empStatus: '',
        status: '',
        repay_date: [],
        repaydata: [],
        selected_order: [],
        list_employees: [],
        Sale_Category: [{ id: 1, name: "normal -0%", percent: 0 },
        { id: 2, name: "sala-promo -0%", percent: 0 },
        { id: 3, name: "group5 -5%", percent: 5 },
        { id: 4, name: "group10 -10%", percent: 10 },
        { id: 5, name: "xmas-promo -0%", percent: 0 },
        { id: 6, name: "renewal -5%", percent: 5 },
        { id: 7, name: "family-friend -5%", percent: 5 },
        { id: 8, name: "Post-dated/direct-debit -5%", percent: 5 },
        { id: 9, name: "Opening-sales -10%", percent: 10 }
        ],

        sales_t: [{ id: 1, name: "0%", percent: 0 },
        { id: 2, name: "20%", percent: 20 },
        { id: 3, name: "40%", percent: 40 },
        { id: 4, name: "60%", percent: 60 },
        { id: 5, name: "80%", percent: 80 },
        ],

        r_months: [{ id: 1, month: "3 months", val: 3 },
        { id: 2, month: "6 months", val: 6  },
        { id: 3, month: "12 months", val: 12  }
        ],
        r_month:'',

        products: [
            {
                branchId: 1,
                branchType: "Appliances",
                branchProducts: [
                    {
                        id: 1,
                        prodType: "Chest Freezer",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "260l",
                                    "185l",
                                    "165l",
                                    "127l",
                                    "320LGR",
                                    "519LGR",
                                    "295l",
                                    "190l",
                                    "359l"
                                ]
                            },
                            {
                                name: "Midea", sizes: [
                                    "185l",
                                    "196l",
                                    "206l"
                                ]
                            },
                            {
                                name: "Syinix", sizes: [
                                    "145l",
                                    "200l",
                                    "265l"
                                ]
                            },
                            {
                                name: "Hisense", sizes: [
                                    "310l",
                                    "250l",
                                    "205l",
                                    "100l",
                                    "190l",
                                    "145l"
                                ]
                            },
                            {
                                name: "Century", sizes: [
                                    "310l"
                                ]
                            },
                            {
                                name: "Bruhm", sizes: [
                                    "100l",
                                    "200l"
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        prodType: "Refridegrator",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "429l",
                                    "261l",
                                    "203LR",
                                    "78LB",
                                    "172Sl",
                                    "177Sl",
                                    "176Wl",
                                    "215l",
                                    "250l"
                                ]
                            },
                            {
                                name: "LG", sizes: [
                                    "161l",
                                    "250l"
                                ]
                            },
                            {
                                name: "Syinix", sizes: [
                                    "93l",
                                    "212l",
                                    "155l"
                                ]
                            },
                            {
                                name: "Hisense", sizes: [
                                    "46l",
                                    "100l",
                                    "165l",
                                    "250l",
                                    "150L",
                                    "130L",
                                    "92L",
                                    "150L"
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        prodType: "Washing Machine",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "10kg",
                                    "6.5kg",
                                    "9.5kg",
                                    "7kg"
                                ]
                            },
                            {
                                name: "Century", sizes: [
                                    "8kg",
                                    "6kg",
                                    "7.8kg",
                                    "10.2kg"
                                ]
                            },
                            {
                                name: "QASA", sizes: [
                                    "8.2kg",
                                    "10.2kg",
                                    "5kg",
                                    "7.8kg"
                                ]
                            },
                            {
                                name: "Hisense", sizes: [
                                    " Front loader 6kg",
                                    "Front loader 7.2kg",
                                    "Front loader 5kg"
                                ]
                            },
                            {
                                name: "Synix", sizes: [
                                    " 7.0kg"
                                ]
                            },
                            {
                                name: "Nexus", sizes: [
                                    " 7.5kg",
                                    " 8.5kg",
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        prodType: "Generator",
                        models: [
                            {
                                name: "Elepax", sizes: [
                                    "4kva",
                                    "3.5kva",
                                    "2.2kva",
                                    "2.5kva",
                                    "4.5kva",
                                    "1kva"
                                ]
                            },
                            {
                                name: "Tiger", sizes: [
                                    "1.2kva",
                                    "2.2kva"
                                ]
                            },
                            {
                                name: "Lutian", sizes: [
                                    "3.2kva",
                                    "3.0kva",
                                    "4.0kva",
                                    "2.2kva",
                                    "1.0kva"
                                ]
                            },
                            {
                                name: "Sumec Fireman", sizes: [
                                    "1.0kva"
                                ]
                            },
                            {
                                name: "Power value", sizes: [
                                    "2.2kva",
                                    "2.5kVa"
                                ]
                            },
                            {
                                name: "Peak power", sizes: [
                                    "2.2kva",
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        prodType: "Standing Fan",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "20 inch",
                                    "26 inch"
                                ]
                            },
                            {
                                name: "OX", sizes: [
                                    "20 inch",
                                    "26 inch"
                                ]
                            },
                            {
                                name: "Century", sizes: [
                                    "20 inch",
                                    "26 inch"
                                ]
                            },
                            {
                                name: "Sonic", sizes: [
                                    "26 inch",
                                    "20 inch"
                                ]
                            },
                        ]
                    },
                    {
                        id: 6,
                        prodType: "Industrial Fan",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "21 inch",
                                ]
                            },
                            {
                                name: "OX", sizes: [
                                    "20 inch",
                                    "26 inch"
                                ]
                            }
                        ]
                    },
                    {
                        id: 7,
                        prodType: "Gas Cooker",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "3 GAS BUNNER, 1 ELECTRIC",
                                    "4 GAS BURNNER"
                                ]
                            },
                            {
                                name: "Century", sizes: [
                                    "3 GAS BUNNER, 1 ELECTRIC",
                                    "4 GAS BURNNER",
                                    "4 GAS BUNNER, 2 ELECTRIC",
                                ]
                            },
                            {
                                name: "QASA", sizes: [
                                    "3 GAS BUNNER, 1 ELECTRIC",
                                    "2 GAS BUNNER, 2 ELECTRIC"
                                ]
                            },
                            {
                                name: "Maxi", sizes: [
                                    "3 GAS BUNNER, 1 ELECTRIC",
                                    "4 GAS BUNNER",
                                    "4 GAS BUNNER, 2 ELECTRIC",
                                    "5 GAS BUNNER"
                                ]
                            }
                        ]
                    },
                    {
                        id: 8,
                        prodType: "Air Conditioner",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "1.5hp",
                                    "1hp",
                                    "2hp"
                                ]
                            },
                            {
                                name: "Hisense", sizes: [
                                    "1hp",
                                    "1.5hp"
                                ]
                            }
                        ]
                    },
                    {
                        id: 9,
                        prodType: "Microwave Oven",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "20l"
                                ]
                            },
                            {
                                name: "Midea", sizes: [
                                    "20l"
                                ]
                            },
                            {
                                name: "Century", sizes: [
                                    "20l"
                                ]
                            }
                        ]
                    },
                    {
                        id: 10,
                        prodType: "Sewing Machine",
                        models: [
                            {
                                name: "Buddyfly", sizes: [
                                    "Domestic",
                                    "Manual",
                                    "Black"
                                ]
                            },
                            {
                                name: "Beautiful", sizes: [
                                    "Domestic"
                                ]
                            },
                            {
                                name: "Sumo Premium", sizes: [
                                    "Industrial"
                                ]
                            },
                            {
                                name: "Emel", sizes: [
                                    "Industrial"
                                ]
                            },
                            {
                                name: "Two lion", sizes: [
                                    "Black"
                                ]
                            }
                        ]
                    },
                    {
                        id: 11,
                        prodType: "Weaving Machine",
                        models: [
                            {
                                name: "Huldong", sizes: [
                                    " Industrial, 3 Threads"
                                ]
                            },
                            {
                                name: "Two lion", sizes: [
                                    " Over-lock, 5 Threads"
                                ]
                            }
                        ]
                    },
                    {
                        id: 12,
                        prodType: "Television",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "40 inches smart",
                                    "43 inches smart",
                                    "32 inches smart",
                                    "40 inches LED",
                                    "32 inches LED",
                                    "20 inches LED",
                                    "24 inches LED",
                                    "50 inches LED",
                                    "55 inches LED",
                                    "28 inches LED HD",
                                    "24 inches LED HD"
                                ]
                            },
                            {
                                name: "Syinix", sizes: [
                                    "49 inches smart",
                                    "39 inches LED",
                                    "32 inches LED"
                                ]
                            },
                            {
                                name: "Hisense", sizes: [
                                    "24 inches smart",
                                    "32 inches LED",
                                    "40 inches LED",
                                    "43 inches LED",
                                    "49 inches LED",
                                    "40 inches smart",
                                ]
                            },
                            {
                                name: "Century", sizes: [
                                    "32 inches LED",
                                    "24 inches LED"
                                ]
                            },
                            {
                                name: "LG", sizes: [
                                    "32 inches LED",
                                    "43 inches LED"
                                ]
                            },
                            {
                                name: "Maxi", sizes: [
                                    "32 inches",
                                    "24 inches"
                                ]
                            }
                        ]
                    },
                    {
                        id: 13,
                        prodType: "Mobile Phone",
                        models: [
                            {
                                name: "Infinix", sizes: [
                                    "Zero 4 32gb, 3gb",
                                    "Hot 5 16gb, 2gb",
                                    "Hot 5 16gb, 1gb",
                                    "Hot 6 16gb,2gb",
                                    "Note 4 16gb, 2gb",
                                    "S4-2gb",
                                    "S3-3gb",
                                    "Note 4-3gb",
                                    "Note 5-4gb",
                                    "Note 4 pro-2gb",
                                    "Hot 6X-2gb",
                                    "Hot 6-3gb",
                                    "Hot 6X-3gb",
                                    "Hot 6 pro-2gb",
                                    "Hot 6 pro-3gb",
                                    "Hot 7-2gb",
                                    "Hot 7 pro-2gb",
                                    "Hot 7 pro-3gb",
                                    "Smart 2",
                                    "Smart 2 pro",
                                    "S4 (3GB)",
                                    "Smart 3 1gb",
                                    "Smart 3 Plus 2gb",
                                    "Hot 8 32gb,2gb",
                                    "Smart 3 Plus 3gb",
                                    "S5 LITE",
                                    "Hot 8 pro-3gb",
                                    "Smart 4 1gb",
                                    "Hot 8 lite 2gb",
                                    "Hot 7 lite 4gb",
                                    "Hot 9 play 2gb",
                                    "Note 7 lite 4gb",



                                ]
                            },
                            {
                                name: "Tecno", sizes: [
                                    "K7 SPARK 16gb, 1gb",
                                    "K9 PLUS 1gb",
                                    "POVOIR 2(LA7) 16gb,2gb",
                                    "7D",
                                    "10D",
                                    "camon X",
                                    "camon CM",
                                    "camon CX",
                                    "camon 11-4gb",
                                    "camon 11-3gb",
                                    "KA7-1gb",
                                    "KA7 spark-2gb",
                                    "KA70-2gb",
                                    "pouvoir LA7-3gb",
                                    "pouvoir LA7 pro-3gb",
                                    "pouvoir LB6-1gb",
                                    "pop 2",
                                    "pop 3",
                                    "pop 4",
                                    "Spark 3 2gb",
                                    "Spark Youth 1gb ",
                                    "pouvoir 3 Air 1gb",
                                    "pouvoir LB7 3 - 2gb",
                                    "pouvoir 3 Plus - 3gb",
                                    "Spark 4 2gb",
                                    "Droidpad 7F",
                                    "Spark 3 1gb",
                                    "Spark 4 Air 2gb",
                                    "Canon 12",
                                    "pouvoir 3 plus 4gb",
                                    "pop 2F",
                                    "pop 2 Power",
                                    "Canon 12 Air",
                                    "Pop 2 Plus",
                                    "Spark 5 Air 2gb",
                                    "Spark 5",
                                    "Camon 15 Air",
                                    "pouvoir 4"
                                ]
                            },
                            {
                                name: "Gionee", sizes: [
                                    "P5 MINI 8gb, 1gb",
                                    "S8S",
                                    "F20FLite"
                                ]
                            },
                            {
                                name: "Itel", sizes: [
                                    "S12 8gb, 1gb",
                                    "S13",
                                    "S15 1gb",
                                    "P32",
                                    "S32",
                                    "S33",
                                    "P33",
                                    "P33 Plus",
                                    "P3618",
                                    "A55",
                                    "S15 PRO",
                                    "S15 2gb",
                                    "P15",
                                    "A56- 1gb",
                                    "P36 2gb",
                                    "A56- Pro",
                                ]
                            },
                            {
                                name: "Nokia", sizes: [
                                    "2.1",
                                    "3.1"
                                ]
                            },
                            {
                                name: "Samsung", sizes: [
                                    "J7 pro",
                                    "J2 chore",
                                    "J4 chore",
                                    "A20"
                                ]
                            },
                            {
                                name: "Zinox", sizes: [
                                    "Zpad X7 1gb",
                                ]
                            }
                        ]
                    },
                    {
                        id: 14,
                        prodType: "Tablet",
                        models: [
                            {
                                name: "Tecno", sizes: [
                                    "DROIPAD 7D, 16gb, 1gb"
                                ]
                            },
                            {
                                name: "Royale", sizes: [
                                    "A1 FERO ANDRIOD 1gb"
                                ]
                            },
                            {
                                name: "Vigitab", sizes: [
                                    "ANDRIOD 1gb"
                                ]
                            },
                            {
                                name: "Zinox", sizes: [
                                    "Zpad X7 1gb",
                                ]
                            }
                        ]
                    },
                    {
                        id: 15,
                        prodType: "Water Dispenser",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "2 TAPS",
                                    "3 TAPS"
                                ]
                            },
                            {
                                name: "Century", sizes: [
                                    "2 TAPS"
                                ]
                            },
                            {
                                name: "Maxi", sizes: [
                                    "2 TAPS",
                                    "3 TAPS"
                                ]
                            }
                        ]
                    },
                    {
                        id: 16,
                        prodType: "Home Theatre",
                        models: [
                            {
                                name: "Polyster", sizes: [
                                    "HT520",
                                    "VT607"
                                ]
                            },
                            {
                                name: "LG", sizes: [
                                    "300W",
                                    "5 satellite speakers",
                                    "480W Xboom",
                                    "330W",
                                    "720W Xboom",
                                ]
                            }
                        ]
                    },
                    {
                        id: 17,
                        prodType: "Laptop",
                        models: [
                            {
                                name: "hp", sizes: [
                                    "255 4gb/ 500HDD",
                                    "15 CELERON 4gb/ 500HDD"
                                ]
                            }
                        ]
                    },
                    {
                        id: 18,
                        prodType: "Stabilizer",
                        models: [
                            {
                                name: "Century", sizes: [
                                    "2kva",
                                    "3kva",
                                    "1.5kva"
                                ]
                            },
                            {
                                name: "Eva", sizes: [
                                    "5kva",
                                    "2kva"
                                ]
                            },
                            {
                                name: "Qasa", sizes: [
                                    "2.0 kVa",
                                ]
                            },
                            {
                                name: "Duravolt", sizes: [
                                    "2.0 kVa",
                                    "5.0kVa"
                                ]
                            },
                        ]
                    },
                    {
                        id: 19,
                        prodType: "Printer",
                        models: [
                            {
                                name: "hp", sizes: [
                                    "MFP130nw LJ",
                                    "15 CELERON 4gb/ 500HDD"
                                ]
                            }
                        ]
                    },
                    {
                        id: 20,
                        prodType: "Combined",
                        models: [
                            {
                                name: "Fan - Stabilzer", sizes: [
                                    "20 INCHES OX FAN + 2000KVA EVERGREEN STABLIZER",
                                    "20 INCHES POLYSTAR STANDING FAN + 2000KVA EVERGOOD STABLIZER",
                                    "20 INCHES CENTURY FAN + 2.0KVA DURAVOLT STABLIZER"
                                ]
                            },
                            {
                                name: "Phone - Gotv", sizes: [
                                    "TECNO POUVOIR LA7-3GBRAM +GOTV DECODER"
                                ]
                            },
                            {
                                name: "Tv - GoTv", sizes: [
                                    "TV + +GOTV DECODER",
                                ]
                            },
                            {
                                name: "Tv - Stabilzer", sizes: [
                                    "Century Tv, 2KVa Stabilizer",
                                    "32inch Maxi Tv, 2.0KVa Duravolt Stabilizer",
                                ]
                            },
                            {
                                name: "Phone - Stabilzer", sizes: [
                                    "any Phone, any Stabilizer",
                                ]
                            },
                            {
                                name: "Freezer - Stablizer", sizes: [
                                    "205l hisense chest freezer + 2000KVA stablizer",
                                    "250l Hisense chest freezer and 2.OKVA EVERGOOD STABILIZER",
                                    "250l Hisense chest freezer + 2.0KVA DURAVOLT STABLIZER",
                                ]
                            },
                        ]
                    },
                    {
                        id: 21,
                        prodType: "Water Pumping Machine",
                        models: [
                            {
                                name: "Interdab", sizes: [
                                    "1HP 750W"
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                branchId: 2,
                branchType: "Lifestyle",
                branchProducts: [
                    {
                        id: 1,
                        prodType: "Sofa",
                        models: [
                            {
                                name: "Leather", sizes: [
                                    "Single",
                                    "Double",
                                    "Tripple",
                                    "fullset"
                                ]
                            },
                            {
                                name: "Fab", sizes: [
                                    "Single",
                                    "Double",
                                    "Tripple",
                                    "fullset"
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        prodType: "Dining Set ",
                        models: [
                            {
                                name: "Cha", sizes: [
                                    "2 pair",
                                    "3 pair"
                                ]
                            },
                            {
                                name: "Tab", sizes: [
                                    "2 pair",
                                    "3 pair"
                                ]
                            },
                            {
                                name: "Com", sizes: [
                                    "2 pair",
                                    "3 pair",
                                    "6*4.5"
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        prodType: "Bed Frame ",
                        models: [
                            {
                                name: "Com", sizes: [
                                    "6*4.5",
                                    "6*6"
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        prodType: "Mattress",
                        models: [
                            {
                                name: "Vitaform", sizes: [
                                    "6*4.5*8",
                                    "6*4.5*10",
                                    "6*6*8",
                                    "6*6*10",
                                    "6*7*8",
                                    "6*4.5*12",
                                    "6*4.5*14",
                                    "6*4.5*18",
                                    "6*4.5*16",
                                    "6*4.5*20",
                                    "6*3.5*8",
                                    "6*6*12",
                                    "6*7*12",
                                    "6*6*16",
                                    "6*7*8",
                                    "6*6*8",
                                    "6*7",
                                    "6*7*10"
                                ]
                            },
                            {
                                name: "Winco", sizes: [
                                    "6*4*8",
                                    "6*4.5.8",
                                    "6*4.5.10",
                                    "6*4.5*12",
                                    "6*4.5*16",
                                    "6*4.5*18",
                                    "6*6*8",
                                    "6*6*10",
                                    "6*6*12",
                                    "6*6*14",
                                    "6*6*16"
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        prodType: "Duvet ",
                        models: [
                            {
                                name: "Vitaform", sizes: [
                                    "6*6"
                                ]
                            }
                        ]
                    },
                    {
                        id: 6,
                        prodType: "Duvet - Bed spread ",
                        models: [
                            {
                                name: "Vitaform", sizes: [
                                    "6*6"
                                ]
                            }
                        ]
                    },
                    {
                        id: 7,
                        prodType: "Pillow",
                        models: [
                            {
                                name: "Gaz", sizes: [
                                    "--"
                                ]
                            },
                            {
                                name: "Dov", sizes: [
                                    "--"
                                ]
                            }
                        ]
                    },
                    {
                        id: 8,
                        prodType: "Wardrobe",
                        models: [
                            {
                                name: "Com", sizes: [
                                    "2 doors"
                                ]
                            },
                            {
                                name: "Dov", sizes: [
                                    "2 doors"
                                ]
                            }
                        ]
                    },
                    {
                        id: 9,
                        prodType: "Center Table",
                        models: [
                            {
                                name: "Leather", sizes: [
                                    "--"
                                ]
                            }
                        ]
                    },
                    {
                        id: 10,
                        prodType: "Dressing mirror",
                        models: [
                            {
                                name: "Mdf", sizes: [
                                    "--"
                                ]
                            }
                        ]
                    },
                    {
                        id: 11,
                        prodType: "Television stand",
                        models: [
                            {
                                name: "Mdf", sizes: [
                                    "Brown"
                                ]
                            },
                            {
                                name: "Glass", sizes: [
                                    "Black",
                                    "Transparent"
                                ]
                            }
                        ]
                    },
                    {
                        id: 12,
                        prodType: "Centre rugs",
                        models: [
                            {
                                name: "Min", sizes: [
                                    "--"
                                ]
                            },
                            {
                                name: "Max", sizes: [
                                    "--"
                                ]
                            }
                        ]
                    },
                    {
                        id: 13,
                        prodType: "Hair dryer",
                        models: [
                            {
                                name: "Equ", sizes: [
                                    "--"
                                ]
                            }
                        ]
                    },
                    {
                        id: 14,
                        prodType: "Washing basin",
                        models: [
                            {
                                name: "Fib", sizes: [
                                    "--"
                                ]
                            }
                        ]
                    },
                    {
                        id: 16,
                        prodType: "Bed Frame",
                        models: [
                            {
                                name: "Local", sizes: [
                                    "6*7"
                                ]
                            }
                        ]
                    },
                    {
                        id: 17,
                        prodType: "Set of Pots",
                        models: [
                            {
                                name: "Aluminium", sizes: [
                                    "7 Pieces"
                                ]

                            },
                            {
                                name: "Ghana", sizes: [
                                    "7 Pieces"
                                ]

                            },
                            {
                                name: "Non- Stick", sizes: [
                                    "4 Pieces",
                                    "3 Pieces"
                                ]

                            }
                        ]
                    },
                    {
                        id: 18,
                        prodType: "Set of Coolers",
                        models: [
                            {
                                name: "Local", sizes: [
                                    "4 Pieces",
                                ]
                            }
                        ]
                    },
                    {
                        id: 19,
                        prodType: "Grinding Machine",
                        models: [
                            {
                                name: "LOC", sizes: [
                                    "3.6L"
                                ]
                            }
                        ]
                    },
                    {
                        id: 20,
                        prodType: "Office Table",
                        models: [
                            {
                                name: "Local", sizes: [
                                    "Brown"
                                ]
                            }
                        ]
                    },
                    {
                        id: 21,
                        prodType: "Office Chair",
                        models: [
                            {
                                name: "Local", sizes: [
                                    "Brown"
                                ]
                            }
                        ]
                    },
                    {
                        id: 22,
                        prodType: "Industrial Gas cooker",
                        models: [
                            {
                                name: "Local(Fabricated)", sizes: [
                                    "2 Burner"
                                ]
                            }
                        ]
                    },
                    {
                        id: 23,
                        prodType: "Barbar Chair",
                        models: [
                            {
                                name: "Local(Fabricated)", sizes: [
                                    "Black"
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                branchId: 3,
                branchType: "Altara Rescue",
                branchProducts: [{
                    id: 1,
                    prodType: "Food Packs",
                    models: [
                        {
                            name: "Single Package", sizes: [
                                "basket package",
                                "nylon package",
                            ]
                        },
                        {
                            name: "Family of 3", sizes: [
                                "basket package",
                                "nylon package",
                            ]
                        },
                        {
                            name: "Family of 5", sizes: [
                                "basket package",
                                "nylon package",
                            ]
                        },
                        {
                            name: "Flexi", sizes: [
                                "basket package",
                                "nylon package",
                            ]
                        },
                    ]
                }]
            },
            {
                branchId: 4,
                branchType: "Altara Cash Loan",
                branchProducts: [{
                    id: 1,
                    prodType: "Cash Loan",
                    models: [
                        {
                            name: "Loan", sizes: [
                                "Cash",
                                "Direct Debit",
                            ]
                        }
                    ]
                }]
            }
        ],
        pro_cat: '',
        pro_mpd: '',
        product_model: '',
        product_size: '',
        branchProd: [],
        models: [],
        sizes: [],
        orderList: [],
        informal_orderList: [],
        formal_orderList: [],
        orderDate: '',
        firstpurchase: false,
        purchase: {
            p_reciept: '',
            p_date: '',
            cate_gory: '',
            custp_id: '',
            product_sku: '',
            product_price: '',
            down_pay: '',
            sales_agent: '',
            product_name: '',
            product_gty: 1,
            sale_type: '',
            discount: '',
            repaymt: '',
            pay_mtd: '',
            dep_to: '',
            return: '',
            referrer_id: '',
            month:'',
        },

        cust_type: '',
        sale_type: '',
        check_ut: '',
        check_id: '',
        check_bs: '',
        check_pp: '',
        check_gc: '',
        w_guar: '',
        p_guar: '',
        store_v: '',
        product: {
            psku: '',
            pname: '',
            pdesc: '',
            psid: '',
            psdate: '',
            p_cat: '',
            // tpc_pprice: '',
            p_price: '',
            receiver_id: '',
            store_name: '',
        },
        product_cat: '',
        product_branch: '',
        Branchname: [
            { id: 2, name: "Challenge" },
            { id: 3, name: "Dugbe" },
            { id: 4, name: "Iwo-Road" },
            { id: 6, name: "Bodija" },
            { id: 5, name: "Agodi-Gate" },
            { id: 8, name: "Life-Style Bodija" },
            { id: 9, name: "Apata" },
            { id: 11, name: "Life-Style Iwo-Road" },
            { id: 12, name: "Taiwo-Road" },
            { id: 13, name: "Owode-Oyo" },
            { id: 14, name: "General-Ogbomosho" },
            { id: 15, name: "Yoruba" },
            { id: 16, name: "Fulani" },
            { id: 17, name: "Alakia" },
            { id: 18, name: "Iyana Church" }
        ],

        params : [
            {
                month: 12, pim: [
                    { plan: 20, int: 2.5, marg: 0.35 },
                    { plan: 40, int: 2.5, marg: 0.35 },
                    { plan: 60, int: 2.5, marg: 0.35 },
                    { plan: 80, int: 2.5, marg: 0.35 }

                ]
            },
            {
                month: 6, pim: [
                    { plan: 20, int: 3, marg: 0.34 },
                    { plan: 40, int: 3, marg: 0.34 },
                    { plan: 60, int: 3, marg: 0.36 },
                    { plan: 80, int: 3, marg: 0.35 }

                ]
            },
            {
                month: 3 , pim: [
                    { plan: 20, int: 3, marg: 0.35 },
                    { plan: 40, int: 4, marg: 0.36 },
                    { plan: 60, int: 4, marg: 0.35 },
                    { plan: 80, int: 4, marg: 0.34 }

                ]
            }
        ],

        Bank: [
            "Access Bank",
            "Diamond Bank",
            "Ecobank Nigeria",
            "Fidelity Bank Nigeria",
            "First Bank of Nigeria",
            "First City Monument Bank",
            "Guaranty Trust Bank",
            "Heritage Bank Plc.",
            "Keystone Bank Limited",
            "Mainstreet Bank Limited",
            "Skye Bank",
            "Stanbic IBTC Bank Nigeria Limited",
            "Sterling Bank",
            "Union Bank of Nigeria",
            "United Bank for Africa",
            "Unity Bank Plc.",
            "Wema Bank",
            "Zenith Bank"
        ],
        sales_record: 'new',
        old_product_sku: '',
        payDate: '',
        amtPay: '',
        cat_label: '',
        pdiscount: '',
        count: '',
        sale_t: '',
        pay_mtd: '',
        pay_bank: '',
        computed_discount: '',
        discount_t: '',
        bank_draft: false,
    },
    watch: {

        product_branch: function () {
            var that = this;
            console.log(this.product_branch)
            app.products.forEach(function (obj) {
                if (obj.branchId == that.product_branch) {
                    app.branchProd = obj.branchProducts;
                    console.log(app.branchProd);
                }
            })
        },

        product_cat: function () {
            console.log('yes' + this.product_cat);
            var that = this;
            app.branchProd.forEach(function (obj) {
                if (obj.id == that.product_cat) {
                    app.pro_cat = obj.prodType;
                    console.log(app.pro_cat);
                    app.models = obj.models;
                }
            })
        },

        product_model: function () {
            var that = this;
            this.product_cat
            console.log(this.product_model);
            app.sizes = this.product_model.sizes;
            app.branchProd.forEach(function (obj) {
                if (obj.id == that.product_cat) {
                    app.sizes = obj.models[that.product_model].sizes
                    app.pro_mpd = obj.models[that.product_model].name;
                    console.log(app.pro_mpd);
                }
            })
        },

        product_sku: function () {
            console.log(this.product_sku.toUpperCase());
            if (this.product_sku.length > 5) {
                console.log("call change");
                axios.post("https://altara-api.herokuapp.com/api.php?action=checkprod", { product_sku: this.product_sku })
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=checkprod", { product_sku: this.product_sku })
                 .then(function (response) {
                        app.dataloaded = false;
                        console.log(response);
                        if (response.data.error) {
                            app.errorMessage = response.data.message;
                        } else {

                            app.Customer_id = app.purchase.custp_id;
                            app.PurchaseidCheck();


                            app.sales_t.forEach(function (obj) {
                                if (obj.id == app.purchase.sale_type) {
                                    app.sale_t = obj.percent;
                                }
                            })

                            app.r_months.forEach(function (obj) {
                                if (obj.id == app.purchase.month) {
                                    app.r_month = obj.val;
                                }
                            })

                            app.Sale_Category.forEach(function (obj) {
                                if (obj.id == app.purchase.discount) {
                                    app.discount_t = obj.percent;
                                }
                            })
                            if (response.data.users.length > 0) {
                                app.checkEmpStatus(app.Customer_id, response.data.users[0].pc_pprice);
                                if (app.discount_t != 0) {
                                    app.computed_discount = app.purchase.product_price * (app.discount_t / 100)
                                }
                                else app.computed_discount = 0
                                app.CountOrders();
                                console.log(app.computed_discount);
                            }
                            else
                                app.errorMessage = 'No records'; setTimeout(function () {
                                    app.errorMessage = '';
                                }, 2000);
                            if (response.data.users[0].product_name) {
                                app.product_name = response.data.users[0].product_name;
                            }
                            else
                                app.errorMessage = 'No records'; setTimeout(function () {
                                    app.errorMessage = '';
                                }, 2000);
                        }
                    });
            } else {
                app.product_name = '';
                app.purchase.product_price = '';
                app.purchase.down_pay = '';
                app.purchase.repaymt = '';
                app.computed_discount = '';
            }
        },

        ppercentage: function () {
            if (this.product_sku.length != '' && this.ppercentage == 'twenty') {
                app.product_price = app.twproduct_price;
                console.log("twenty" + app.product_price);
                app.repayment = Math.floor(((app.product_price - ((Math.floor((0.2 * app.product_price) / 100)) * 100)) / 12) / 100) * 100;
                app.first_payment = (Math.floor((0.2 * app.product_price) / 100)) * 100
            }
            else {
                app.product_price = app.frproduct_price;
                console.log("fourty" + app.product_price);
                app.repayment = Math.floor(((app.product_price - ((Math.floor((0.4 * app.product_price) / 100)) * 100)) / 12) / 100) * 100;
                app.first_payment = (Math.floor((0.4 * app.product_price) / 100)) * 100
            }
        },
        customer: function () {
        }
    },
    mounted: function () {
        console.log('mounted');
        this.ListEmployees();
    },

    computed: {
        filteredList_customers: function () {
            return this.list_customers.filter((list_customer) => {
                return list_customer.first_name.match(this.search) + list_customer.last_name.match(this.search);
            });
        },
    },

    methods: {
        Purchase: function () {
            // var percent;

            console.log(app.purchase.referrer_id)
            app.purchase.product_sku = app.product_sku.toUpperCase();
            app.purchase.product_name = app.product_name;
            app.purchase.product_gty = 1;
            var formData = app.toFormData(app.purchase);
            app.purchase.return = 1;
            console.log(app.purchase);
            if (
                // app.purchase.dep_to != '' &&
                // app.purchase.discount != '' &&
                app.purchase.p_reciept != '' &&
                app.purchase.pay_mtd != '' &&
                // app.purchase.referrer_id != '' &&
                // app.purchase.return != '' &&
                app.purchase.sale_type != ''
            ) {
                console.log(app.purchase);
                axios.post("https://altara-api.herokuapp.com/api.php?action=purchase", formData)
                    // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=purchase", formData)
                    .then(function (response) {
                        console.log(response);
                        if (typeof response.data !== 'object') {
                            app.errorMessage = "Record already Exist"; setTimeout(function () {
                                app.errorMessage = '';
                            }, 2000);

                        } else {
                            app.firstpurchase = true;
                            console.log(app.purchase.p_date);
                            if (app.purchase.p_date < '2019-07-07' && app.empStatus == 'formal') {
                                console.log('old formal')
                                app.Repay(app.purchase.p_reciept, app.purchase.p_date, 'old-formal');
                            }
                            else {
                                console.log('new formal')
                                app.Repay(app.purchase.p_reciept, app.purchase.p_date, 'informal');
                            }

                            app.updateStore(app.purchase.product_sku, app.purchase.p_date, app.purchase.sales_agent);
                            app.successMessage = response.data.message;

                            console.log('Ok')
                            app.purchase.p_reciept = '';
                            app.purchase.p_date = '';
                            app.purchase.cate_gory = '';
                            app.purchase.custp_id = '';
                            app.purchase.product_sku = '';
                            app.purchase.product_price = '';
                            app.purchase.down_pay = '';
                            app.purchase.sales_agent = '';
                            app.purchase.product_name = '';
                            app.purchase.product_gty = '';
                            app.purchase.sale_type = '';
                            app.purchase.discount = '';
                            app.purchase.repaymt = '';
                            app.purchase.pay_mtd = '';
                            app.purchase.dep_to = '';
                            app.purchase.referrer_id = '';
                            app.product_name = '';
                            app.product_sku = '';
                            app.month ='';
                        }
                    });
            }
            else {
                app.errorMessage = 'All field must be filled'; setTimeout(function () {
                    app.errorMessage = '';
                }, 2000);
            }
        },

        oldPurchase: function () {
            console.log(app.purchase.referrer_id)
            app.purchase.product_sku = app.old_product_sku.toUpperCase();
            app.purchase.product_name = app.product_name;
            app.purchase.product_gty = 1;
            app.purchase.cate_gory = 1;
            var formData = app.toFormData(app.purchase);
            app.purchase.return = 1;
            console.log(app.purchase);
            if (
                app.purchase.p_reciept != '' &&
                app.purchase.pay_mtd != '' &&
                app.purchase.sale_type != ''
            ) {
                app.oldProductLog();
                console.log(app.purchase);
                axios.post("https://altara-api.herokuapp.com/api.php?action=purchase", formData)
                    // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=purchase", formData)
                    .then(function (response) {
                        console.log(response);
                        if (typeof response.data !== 'object') {
                            app.errorMessage = "Record already Exist"; setTimeout(function () {
                                app.errorMessage = '';
                            }, 2000);

                        } else {
                            app.firstpurchase = true;
                            console.log(app.purchase.p_date);
                            if (app.purchase.p_date < '2019-07-07' && app.empStatus == 'formal') {
                                console.log('old formal')
                                app.Repay(app.purchase.p_reciept, app.purchase.p_date, 'old-formal');
                            }
                            else {
                                console.log('new formal')
                                app.Repay(app.purchase.p_reciept, app.purchase.p_date, 'informal');
                            }

                            app.updateStore(app.purchase.product_sku, app.purchase.p_date, app.purchase.sales_agent);
                            app.successMessage = response.data.message;

                            console.log('Ok')
                            app.purchase.p_reciept = '';
                            app.purchase.p_date = '';
                            app.purchase.cate_gory = '';
                            app.purchase.custp_id = '';
                            app.purchase.product_sku = '';
                            app.purchase.product_price = '';
                            app.purchase.down_pay = '';
                            app.purchase.sales_agent = '';
                            app.purchase.product_name = '';
                            app.purchase.product_gty = '';
                            app.purchase.sale_type = '';
                            app.purchase.discount = '';
                            app.purchase.repaymt = '';
                            app.purchase.pay_mtd = '';
                            app.purchase.dep_to = '';
                            app.purchase.referrer_id = '';
                            app.product_name = '';
                            app.product_sku = '';
                        }
                    });
            }
            else {
                app.errorMessage = 'All field must be filled'; setTimeout(function () {
                    app.errorMessage = '';
                }, 2000);
            }

        },

        ListEmployees: function () {
            axios.get("https://altara-api.herokuapp.com/api.php?action=listsalesemp")
                // axios.get("http://localhost/AltaraCredit/altara_api/api.php?action=listsalesemp")
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                    } else {
                        app.list_employees = response.data.users;
                        console.log(app.list_employees);
                    }
                });
        },

        CountOrders: function () {
            axios.post("https://altara-api.herokuapp.com/api.php?action=orderCount", {
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=orderCount",{
                Customer_id: app.purchase.custp_id
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                    } else {
                        app.count = response.data.checklist[0].count;
                        app.purchase.cate_gory = (app.count == 0) ? 1 : 2
                        console.log(app.count);
                    }
                });
        },

        checkEmpStatus: function (id, pc_pprice) {
            axios.post("https://altara-api.herokuapp.com/api.php?action=empSta", {
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=empSta",{
                Customer_id: id
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                    } else {
                        app.empStatus = response.data.checklist[0].empstatus;
                        // app.priceCal(pc_pprice, app.sale_t, app.bank_draft, app.purchase.p_date, app.r_month)
                        app.illustratedPrice(pc_pprice, app.sale_t, app.bank_draft, app.purchase.p_date, app.r_month)

                    }
                });
        },

        ProductLog: function () {
            app.product.pname = app.product_size + ' ' + app.pro_mpd + ' ' + app.pro_cat;
            app.product.p_cat = app.pro_cat.toUpperCase();
            app.product.pdesc = app.product_size.toUpperCase();
            console.log(app.product);
            if (app.product.psku != '' &&
                app.product.pname != '' &&
                app.product.pdesc != '' &&
                app.product.psid != '' &&
                app.product.psdate != '' &&
                app.product.p_cat != '' &&
                // app.product.tpc_pprice != '' &&
                app.product.p_price != '' &&
                app.product.receiver_id != '' &&
                app.product.store_name != '') {

                app.product.psku = app.product.psku.toUpperCase();
                app.product.pname = app.product.pname.toUpperCase();
                console.log(app.product);
                var formData = app.toFormData(app.product);

                axios.post("https://altara-api.herokuapp.com/api.php?action=newproduct", formData)
                    // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=newproduct", formData)
                    .then(function (response) {
                        console.log(response);
                        if (typeof response.data !== 'object') {
                            app.errorMessage = "Record already Exist"; setTimeout(function () {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.successMessage = response.data.message;
                            app.product.psku = '';
                            app.product.pname = '';
                            app.product.pdesc = '';
                            app.product.psid = '';
                            app.product.psdate = '';
                            app.product.p_cat = '';
                            // app.product.tpc_pprice = '';
                            app.product.p_price = '';
                            app.product.receiver_id = '';
                            app.product.store_name = '';
                        }
                    });
            }
            else app.errorMessage = 'All field must be filled';
        },

        oldProductLog: function () {
            app.product.pname = app.product_size + ' ' + app.pro_mpd + ' ' + app.pro_cat;
            app.product.p_cat = app.pro_cat.toUpperCase();
            app.product.pdesc = app.product_size.toUpperCase();
            app.product.p_price = app.purchase.product_price;
            app.product.psdate = app.purchase.p_date;
            app.product.psku = app.old_product_sku;
            app.product.psid = 'NA';
            app.product.receiver_id = app.purchase.sales_agent;
            console.log(app.product);
            if (app.product.psku != '' &&
                app.product.pname != '' &&
                app.product.pdesc != '' &&
                app.product.psid != '' &&
                app.product.psdate != '' &&
                app.product.p_cat != '' &&
                // app.product.tpc_pprice != '' &&
                app.product.p_price != '' &&
                app.product.receiver_id != '' &&
                app.product.store_name != '') {

                app.product.psku = app.product.psku.toUpperCase();
                app.product.pname = app.product.pname.toUpperCase();
                console.log(app.product);
                var formData = app.toFormData(app.product);

                axios.post("https://altara-api.herokuapp.com/api.php?action=newproduct", formData)
                    // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=newproduct", formData)
                    .then(function (response) {
                        console.log(response);
                        if (typeof response.data !== 'object') {
                            app.errorMessage = "Record already Exist"; setTimeout(function () {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.successMessage = response.data.message;
                            app.product.psku = '';
                            app.product.pname = '';
                            app.product.pdesc = '';
                            app.product.psid = '';
                            app.product.psdate = '';
                            app.product.p_cat = '';
                            // app.product.tpc_pprice = '';
                            app.product.p_price = '';
                            app.product.receiver_id = '';
                            app.product.store_name = '';
                        }
                    });
            }
            else app.errorMessage = 'All field must be filled';
        },

        Repay: function (id, paydate, orderTp) {
            var api_link;
            var nextdate;
            var date = new Date(paydate);
            var periodi;
            var pay_mtd
            var pay_bank
            if (app.firstpurchase == true) {
                periodi = 'firstpayment';
                pay_mtd = app.purchase.pay_mtd
                pay_bank = app.purchase.dep_to

            } else {
                periodi = app.repaydata[0].period
                pay_mtd = app.pay_mtd
                pay_bank = app.pay_bank
            }

            if (orderTp == 'old-formal') {
                console.log('Old Formal Order repay')
                nextdate = app.formatDate(app.addDays(date, 28));
                api_link = "https://altara-api.herokuapp.com/api.php?action=formal_repay"
                // api_link =  "http://localhost/AltaraCredit/altara_api/api.php?action=formal_repay"
            }

            else {
                console.log('InFormal Order repay')
                nextdate = app.formatDate(app.addDays(date, 14));
                api_link = "https://altara-api.herokuapp.com/api.php?action=informal_repay"
                // api_link =  "http://localhost/AltaraCredit/altara_api/api.php?action=informal_repay"

            }
            console.log(id);
            var pushrepay = {
                repayid: id,
                period: periodi,
                date_payed: app.payDate,
                amount_payed: app.amtPay,
                nowdate: paydate,
                nextdate: nextdate,
                pay_mtd: pay_mtd,
                pay_bank: pay_bank
            }

            console.log(pushrepay)
            console.log(app.empStatus)
            var formData = app.toFormData(pushrepay);
            // axios.post("https://altara-api.herokuapp.com/api.php?action="+repay+","+ formData)
            axios.post(api_link, formData)
                .then(function (response) {
                    console.log('yes')
                    console.log(response);

                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                        setTimeout(function () {
                            app.errorMessage = '';
                        }, 2000);
                    } else {
                        if (app.firstpurchase == false) {
                        }

                        app.firstpurchase = false;
                        app.successMessage = response.data.message;
                        setTimeout(function () {
                            app.successMessage = '';
                        }, 2000);
                    }
                });
        },

        // UpdateRepay: function (id) {
        //     if (app.empStatus == 'formal'){
        //         app.uprepay = 'formal_uprepay';
        //      }
        //      else {
        //         app.uprepay ='informal_uprepay';
        //      }
        //     app.dataloaded = true;
        //     axios.post("https://altara-api.herokuapp.com/api.php?action="+ app.uprepay +","+ {
        //         // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=uprepay", {
        //         repay_id: id
        //     })
        //         .then(function (response) {
        //             console.log(response);
        //             if (response.data.error) {
        //                 app.errorMessage = response.data.message;
        //             } else {
        //                 console.log(response.data.orders[0])
        //                 response.data.orders[0].order_date = app.orderDate;
        //                 response.data.orders[0].repayment = app.repay_amt;

        //                 app.pushToRepay(response.data.orders[0]);
        //                 app.dataloaded = false;
        //             }
        //         });
        // },

        GainAccess: function (feature) {
            console.log(feature)
            app.submitted = true;
            var emp = app.Employee_id;

            // if (!isNaN(emp.charAt(4))) {
            //     emp.slice(4);
            //     emp.slice(0, -3)
            // } else if ((!isNaN(emp.charAt(5)))) {
            //     emp.slice(5);
            //     emp.slice(0, -3)
            // } else {

            // }
            var dat = {
                Employee_id: emp,
                Access_code: app.Access_code
            }
            var formData = app.toFormData(dat);
            console.log()
            axios.post("https://altara-api.herokuapp.com/api.php?action=login", formData)
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=login", formData)
                .then(function (response) {
                    app.dataloaded = false;
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;

                        setTimeout(function () {
                            app.errorMessage = '';
                        }, 2000);

                    } else {
                        if (feature == 'lookup') {
                            app.access_granted = true;
                            app.successMessage = "Access Granted!, Enter Customer ID below";

                            setTimeout(function () {
                                app.successMessage = '';
                            }, 2000);

                        }

                        if (feature == 'purchaselog') {
                            app.access_granted2 = true;
                            app.successMessage = "Access Granted!, Enter Customer ID below";

                            setTimeout(function () {
                                app.successMessage = '';
                            }, 2000);

                        }
                        if (feature == 'repaymentlog') {
                            console.log('Yes Ok')
                            console.log(app.repaydata);
                            app.access_granted3 = true;
                            app.successMessage = "Access Granted!, Enter Customer ID below";

                            setTimeout(function () {
                                app.successMessage = '';
                            }, 2000);
                        }

                        if (feature == 'productlog') {
                            app.access_granted4 = true;
                            app.successMessage = "Access Granted!, Enter Customer ID below";

                            setTimeout(function () {
                                app.successMessage = '';
                            }, 2000);
                        }


                    }
                });
        },

        PurchaseidCheck: function () {
            console.log(app.Customer_id);
            axios.post("https://altara-api.herokuapp.com/api.php?action=checkId", {
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=checkId", {
                Customer_id: app.Customer_id
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                        app.dataloaded = false;
                        setTimeout(function () {
                            app.errorMessage = '';
                        }, 2000);
                    } else {
                        if (response.data.checklist.length != 0) {
                            app.cust_type = response.data.checklist[0].employment_status;
                            console.log(app.cust_type);
                        } else {
                            app.errorMessage = "Customer ID Doest Exist!";
                            setTimeout(function () {
                                app.errorMessage = '';
                            }, 2000);
                            app.dataloaded = false;
                        }
                    }
                });
        },

        CheckId: function () {
            app.dataloaded = true;
            console.log(app.Customer_id);
            axios.post("https://altara-api.herokuapp.com/api.php?action=checkId", {
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=checkId", {
                Customer_id: app.Customer_id
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                        app.dataloaded = false;
                        setTimeout(function () {
                            app.errorMessage = '';
                        }, 2000);
                    } else {
                        if (response.data.checklist.length != 0) {
                            app.repay = response.data.checklist;
                            console.log(app.repay);
                            app.dataloaded = false;

                            app.CustName = response.data.checklist[0].first_name + " " + response.data.checklist[0].last_name
                            app.address = response.data.checklist[0].add_houseno + ", " + response.data.checklist[0].add_street + ", " + response.data.checklist[0].area_address + ", Ibadan, Oyo state";
                            app.phoneNo = response.data.checklist[0].telephone;
                            app.empStatus = response.data.checklist[0].employment_status;
                            // app.CheckDoc(app.Customer_id)

                            app.CustomerOrders();

                            //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
                            var sqlDateArr1 = response.data.checklist[0].date_of_registration.split("-");
                            var monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];
                            var sqlDateArr2 = sqlDateArr1[2].split(" ");
                            var sDay = sqlDateArr2[0];
                            var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
                            var sYear = sqlDateArr1[0];
                            app.Regdate = monthNames[sMonth] + ", " + sDay + ", " + sYear;
                        } else {
                            app.errorMessage = "Customer ID Doest Exist!";
                            // app.sendNotification(name, telnumber)
                            setTimeout(function () {
                                app.errorMessage = '';
                            }, 2000);
                            app.dataloaded = false;
                        }
                    }
                });
        },

        CheckDoc: function (customer) {
            console.log(customer)
            axios.post("https://altara-api.herokuapp.com/api.php?action=checkDoc", {
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=checkDoc", {
                Customer_id: customer,
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                        setTimeout(function () {
                            app.errorMessage = '';
                        }, 2000);
                    } else {
                        if (response.data.checklist.length != 0) {
                            app.check_ut = response.data.checklist[0].utility;
                            app.check_id = response.data.checklist[0].id_proof;
                            app.check_bs = response.data.checklist[0].banks;
                            app.check_pp = response.data.checklist[0].passport;
                            app.check_gc = response.data.checklist[0].gcheque;
                            app.w_guar = response.data.checklist[0].work_guarantor;
                            app.p_guar = response.data.checklist[0].personal_gua;
                            app.store_v = response.data.checklist[0].store_visited;
                        }

                        else {
                            // app.errorMessage = "Customer ID Doest Exist!";
                            // // app.sendNotification(name, telnumber)
                            // setTimeout(function() {
                            //     app.errorsMessage = '';
                            // }, 2000);
                            // app.dataloaded = false;
                        }
                        app.successMessage = response.data.message;
                        // app.sendNotification(name, telnumber)
                        setTimeout(function () {
                            app.successMessage = '';
                        }, 2000);

                    }
                });

        },

        toFormData: function (obj) {
            var form_data = new FormData();
            for (var key in obj) {
                form_data.append(key, obj[key]);
            }
            return form_data;
        },

        resetMessage: function () {
            app.errorMessage = "";
            app.successMessage = "";
        },

        CustomerOrders: function () {

            console.log(app.empStatus);

            // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=orders", {
            axios.post("https://altara-api.herokuapp.com/api.php?action=orders", {
                // axios.post(api_link, {
                Customer_id: app.Customer_id
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                    } else {
                        app.idchecked = true;
                        console.log(response.data)
                        if (response.data.orders.length != 0) {
                            app.orderList = response.data.orders;
                            response.data.orders.forEach(element => {
                                var policyDate = new Date('2019-07-07');
                                var orderDat = new Date(element.order_date);
                                if ((element.employment_status == 'formal' && orderDat > policyDate) || element.employment_status == 'informal(business)') {
                                    app.informal_orderList.push(element);
                                }
                                else {
                                    app.formal_orderList.push(element)
                                }

                            });
                            console.log(app.informal_orderList)
                            console.log(app.formal_orderList)
                        }
                    }
                });
        },

        updateStore: function (psku, pdate, seller) {
            axios.post("https://altara-api.herokuapp.com/api.php?action=upstore", {
                // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=upstore", {
                product_sku: psku,
                purchase_date: pdate,
                seller_id: seller
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                    } else {
                    }
                });
        },

        priceCal(mPrice, plan, bank_draft, date, month) {
            console.log(plan, month);
            let dPrice;
            let rPrice;
            let afInt;
            let pInt;
            let aTax;
            let upFront;
            let rePay;
            let mRepay;
            let int;
            console.log(mPrice);
            let margin;
            // let margin = 0.25;

            // let margin = (plan == 0) ? 0.33 : (plan == 20) ? 0.28 : (plan == 40) ? 0.27 : (plan == 60) ? 0.31 : (plan == 80) ? 0.30 : null;

            this.params.forEach(element => {
                if (month == element.month) {
                    console.log(element.month)
                    element.pim.forEach(element2 => {
                        if (element2.plan == plan) {
                            this.int = element2.int;
                            this.margin = element2.marg;
                            console.log(element2.int, element2.marg);
                        }
                    });
                }
            });

console.log(this.int, this.margin);

            if (mPrice <= 25000) {
                mPrice = (mPrice * this.margin) + Number(mPrice);
                Math.ceil(mPrice);
                console.log(mPrice);
                this.int = (plan == 0) ? 3.3 : this.int;
                dPrice = (plan == 0) ? 0 : mPrice * (plan / 100);
                Math.ceil(dPrice / 100) * 100;
                console.log(dPrice);
                rPrice = mPrice - dPrice;
                Math.ceil(rPrice / 100) * 100;
                console.log(rPrice);
                afInt = (rPrice * (this.int / 100)) * 12;
                Math.ceil(afInt / 100) * 100;
                console.log(afInt);
                pInt = afInt + dPrice + rPrice;
                Math.ceil(pInt / 100) * 100;
                console.log(pInt);
                aTax = ((0.05 * pInt) + pInt);
                Math.ceil(aTax / 100) * 100;
                console.log(aTax);
                upFront = (plan == 0) ? 0 : aTax * (plan / 100);
                Math.ceil(upFront / 100) * 100;
                console.log(upFront);
                rePay = aTax - upFront;
                Math.ceil(rePay / 100) * 100;
                console.log(pInt);
                mRepay = (bank_draft == true || (date < '2019-07-07' && app.empStatus == 'formal')) ? rePay / 6 : rePay / 12;
                Math.ceil(mRepay / 100) * 100;
                console.log(mRepay);


                app.purchase.down_pay = (Math.ceil(upFront / 100) * 100) - 100;
                app.purchase.repaymt = (Math.ceil(mRepay / 100) * 100) - 100;
                app.purchase.product_price = (bank_draft == true || (date < '2019-07-07' && app.empStatus == 'formal')) ? (app.purchase.repaymt * 6 + app.purchase.down_pay) : (app.purchase.repaymt * 12 + app.purchase.down_pay)

            }
            else {
                mPrice = (mPrice * this.margin) + Number(mPrice);
                console.log(mPrice)
                this.int = (plan == 0) ? 3.3 : this.int;
                dPrice = (plan == 0) ? 0 : mPrice * (plan / 100);
                console.log(dPrice)
                rPrice = mPrice - dPrice;
                console.log(rPrice)
                afInt = (rPrice * (this.int / 100)) * 12;
                console.log(afInt);
                pInt = afInt + dPrice + rPrice;
                console.log(pInt);
                aTax = ((0.05 * pInt) + pInt);
                upFront = (plan == 0) ? 0 : aTax * (plan / 100);
                rePay = aTax - upFront;
                mRepay = (bank_draft == true || (date < '2019-07-07' && app.empStatus == 'formal')) ? rePay / 6 : rePay / 12;

                app.purchase.down_pay = Math.floor(upFront / 100) * 100
                app.purchase.repaymt = Math.floor(mRepay / 100) * 100
                app.purchase.product_price = (bank_draft == true || (date < '2019-07-07' && app.empStatus == 'formal')) ? (app.purchase.repaymt * 6 + app.purchase.down_pay) : (app.purchase.repaymt * 12 + app.purchase.down_pay)

            }

            // app.purchase.product_price = Math.floor(aTax / 100) * 100


            console.log('Total Price = ' + aTax);
            console.log('UpFront = ' + upFront);
            console.log('Montly Repayment = ' + mRepay);

            console.log('Total Price = ' + app.purchase.product_price);
            console.log('UpFront = ' + app.purchase.down_pay);
            console.log('Montly Repayment = ' + app.purchase.repaymt);

        },



        checkP(wPrice, val){
            // if (wPrice > 25000){
              return val;
            // }
            // else {
            //   return Math.ceil(val/100)*100;
            // }
          },


          rawCal ( wPrice, plan, bank_draft, date, month) {

        params = [
                {
                    month: 12, pim: [
                        { plan: 20, int: 2.5, marg: 0.35 },
                        { plan: 40, int: 2.5, marg: 0.35 },
                        { plan: 60, int: 2.5, marg: 0.35 },
                        { plan: 80, int: 2.5, marg: 0.35 }

                    ]
                },
                {
                    month: 6, pim: [
                        { plan: 20, int: 3, marg: 0.34 },
                        { plan: 40, int: 3, marg: 0.34 },
                        { plan: 60, int: 3, marg: 0.36 },
                        { plan: 80, int: 3, marg: 0.35 }

                    ]
                },
                {
                    month: 3 , pim: [
                        { plan: 20, int: 3, marg: 0.35 },
                        { plan: 40, int: 3.5, marg: 0.36 },
                        { plan: 60, int: 3.5, marg: 0.35 },
                        { plan: 80, int: 3.5, marg: 0.34 }

                    ]
                }
            ],

                console.log(plan, month);
                let mPrice;
                let dpPrice;
                let rInt;
                let trInt;
                let tbTax;
                let taTax;
                let rePay;
                let margin;
                let int;


                this.params.forEach(element => {
                    if (month == element.month) {
                        console.log(element.month)
                        element.pim.forEach(element2 => {
                            if (element2.plan == plan) {
                                this.int = element2.int;
                                this.margin = element2.marg;
                                console.log(element2.int, element2.marg);
                            }
                        });
                    }
                });

                var monthParam = (month == 12)? 24 :  (month == 6)? 12 : 6 ;
                console.log(monthParam);

                    console.log(this.int, this.margin);

                    // market price
                    mPrice =     app.checkP(wPrice, (wPrice * this.margin) + Number(wPrice));
                    console.log(mPrice)

                    // downpayment price
                    dpPrice = app.checkP(wPrice, mPrice * (plan / 100)) ;
                    console.log(dpPrice)

                    //residual price
                    rPrice = app.checkP(wPrice, mPrice - dpPrice) ;
                    console.log(rPrice)

                    //interest on residual
                    rInt = app.checkP(wPrice, (rPrice * (this.int / 100)))
                    console.log(rInt);

                    // totalresidual after interest
                    trInt = app.checkP(wPrice,  ((rPrice/monthParam)+rInt) * monthParam)
                    console.log(rInt);



                    // total before tax
                    tbTax = app.checkP(wPrice, trInt + dpPrice)
                    console.log(tbTax);

                    // total after tax
                    taTax = app.checkP(wPrice, tbTax + (tbTax * 0.05)) ;
                    console.log(taTax);

                    return taTax;
            },

             illustratedPrice(wPrice, plan, bank_draft, date, month){
          let newDp;
          let newRp;
          let mRepay;
          let newTax;
           // total after tax
          let taTax  =  app.rawCal (wPrice, plan, bank_draft, date, month);

          var monthParam = (month == 12)? 24 :  (month == 6)? 12 : 6 ;
                console.log(monthParam);

                   // new downpayment price
                    newDp =  app.checkP(wPrice, taTax * (plan / 100)) ;
                    console.log(newDp)

                    //new residual price
                    newRp = app.checkP(wPrice, taTax - newDp) ;
                    console.log(newRp)

                  //Montly repayment price
                    mRepay = app.checkP(wPrice, newRp / monthParam) ;
                    console.log(mRepay)

                   if (wPrice){
                   newTax = Math.floor(newDp/100)*100 + (Math.floor(mRepay/100)*100 *(monthParam));
                console.log('Total Price = ' + newTax);
                console.log('UpFront = ' + Math.floor(newDp/100)*100);
                console.log('Montly Repayment = ' + Math.floor(mRepay/100)*100);
                app.purchase.down_pay = Math.floor(newDp/100)*100;
                app.purchase.repaymt = Math.floor(mRepay/100)*100;
                app.purchase.product_price = newTax;


                   }
                   else {
                    newTax = newDp + (mRepay * monthParam);

                    app.purchase.down_pay = newD;
                    app.purchase.repaymt = mRepay;
                    app.purchase.product_price = newTax;
                console.log('Total Price = ' + newTax);
                console.log('UpFront = ' + newDp);
                console.log('Montly Repayment = ' + mRepay);

                   }
          },

        pushToRepay: function (selectedOrder, to) {
            var rep;
            app.repay_date = [];
            app.orderDate = selectedOrder.order_date;
            app.repay_amt = selectedOrder.repayment_amount;
            var date = new Date(app.orderDate);
            var a;

            // if (app.orderDate >)

            // var api_link;
            // if (app.bank_draft == true && app.empStatus == 'formal') {

            //     api_link = "https://altara-api.herokuapp.com/api.php?action=formal_orders"
            //     //    api_link =  "http://localhost/AltaraCredit/altara_api/api.php?action=formal_orders"
            // }
            // else {
            //     api_link = "https://altara-api.herokuapp.com/api.php?action=informal_orders"
            //     //    api_link =  "http://localhost/AltaraCredit/altara_api/api.php?action=informal_orders"
            // }


            if (to == 'formal') {
                axios.post("https://altara-api.herokuapp.com/api.php?action=formal_orders", {
                    Order_id: selectedOrder.id
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data.error) {
                            app.errorMessage = response.data.message;
                        } else {
                            console.log(response.data.orders);
                            rep = response.data.orders[0];
                            app.selected_order = Object.assign(selectedOrder, rep);
                            app.repaydata = [
                                { period: '1st', status: rep.first },
                                { period: '2nd', status: rep.second },
                                { period: '3rd', status: rep.third },
                                { period: '4th', status: rep.fourth },
                                { period: '5th', status: rep.fifth },
                                { period: '6th', status: rep.sixth },
                            ]
                            a = [28, 56, 84, 112, 140, 168];
                            for (i = 0; i <= 5; i++) {
                                var ans = app.formatDate(app.addDays(date, a[i]));
                                app.repay_date.push(ans);
                            }

                            for (i = 0; i < app.repay_date.length; i++) {
                                app.repaydata.forEach(element => {
                                    if (app.repaydata.indexOf(element) == i) {
                                        element.date = app.repay_date[i]
                                    }
                                });
                            }

                            app.repaydata = app.repaydata.filter(function (el) {
                                return el.status == null;
                            });
                        }
                    });


            }
            else {

                axios.post("https://altara-api.herokuapp.com/api.php?action=informal_orders", {
                    Order_id: selectedOrder.id
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data.error) {
                            app.errorMessage = response.data.message;
                        } else {
                            console.log(response.data.orders[0]);
                            rep = response.data.orders[0];
                            app.selected_order = Object.assign(selectedOrder, rep);

                            app.repaydata = [
                                { period: '1st', status: rep.first },
                                { period: '2nd', status: rep.second },
                                { period: '3rd', status: rep.third },
                                { period: '4th', status: rep.fourth },
                                { period: '5th', status: rep.fifth },
                                { period: '6th', status: rep.sixth },
                                { period: '7th', status: rep.seventh },
                                { period: '8th', status: rep.eight },
                                { period: '9th', status: rep.nineth },
                                { period: '10th', status: rep.tenth },
                                { period: '11th', status: rep.eleventh },
                                { period: '12th', status: rep.twelveth }
                            ]
                            a = [14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168];
                            for (i = 0; i <= 11; i++) {
                                var ans = app.formatDate(app.addDays(date, a[i]));
                                app.repay_date.push(ans);
                            }

                            for (i = 0; i < app.repay_date.length; i++) {
                                app.repaydata.forEach(element => {
                                    if (app.repaydata.indexOf(element) == i) {
                                        element.date = app.repay_date[i]
                                    }
                                });
                            }

                            app.repaydata = app.repaydata.filter(function (el) {
                                return el.status == null;
                            });

                        }
                    });
            }
            console.log(app.repay_date)
            console.log(app.repaydata);
        },

        addDays: function (date, days) {
            var result = new Date(date);
            result.setDate(date.getDate() + days);
            return result;
        },

        formatDate: function (date) {
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        },

        Repayment: function (list) {
            app.repay = list;
            console.log(app.repay);
        },

        // checkCust: function () {
        //     if (app.CheckCusId == '') {
        //         app.errorMessageChk = "Field can't be empty";
        //         setTimeout(function () {
        //             app.errorMessageChk = '';
        //         }, 1000);

        //     } else {
        //         console.log(app.CheckCusId);
        //         axios.post("https://wafcolapi.herokuapp.com/api.php?action=checkId", {
        //             // axios.post("http://localhost/AltaraCredit/altara_api/api.php?action=checkId", {
        //             Customer_id: app.CheckCusId
        //         })
        //             .then(function (response) {
        //                 console.log(response);
        //                 if (response.data.error) {
        //                     app.errorMessageChk = response.data.message;

        //                     setTimeout(function () {
        //                         app.errorMessageChk = '';
        //                     }, 1000);

        //                 } else {
        //                     app.checKiD = response.data.checklist;
        //                     if (app.checKiD.length != 0) {
        //                         app.showGuaForm = true;
        //                         // app.SelectedGuaData = app.checKiD;
        //                         // console.log(app.SelectedGuaData);

        //                         app.CustName = response.data.checklist[0].first_name + " " + response.data.checklist[0].last_name
        //                         // app.phoneNo = response.data.checklist[0].telephone
        //                     } else {
        //                         app.errorMessageChk = "Customer ID doesnt exist!";

        //                         setTimeout(function () {
        //                             app.errorMessageChk = '';
        //                         }, 1000);
        //                     }
        //                     // app.ApproveCustomer(app.CustName, app.phoneNo);
        //                     // app.Customer_id = "";

        //                 }
        //             });
        //     }
        // },


        payWithPaystack() {
            var handler = PaystackPop.setup({
                key: 'pk_test_4b67cfcd71b58e10dad507eba24169eeb15863ee',
                email: 'poluyege@altaracredit.com',
                amount: 10000,
                currency: "NGN",
                ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                metadata: {
                    custom_fields: [
                        {
                            display_name: "Paul Oluyege",
                            variable_name: "08068492563",
                            value: "+2348068492563"
                        }
                    ]
                },
                callback: function (response) {
                    let tokenStr = 'sk_test_bb1ea0ac61e6899e972d53bd530bed6aa6e325ee';
                    axios.get("https://api.paystack.co/transaction/verify/" + response.reference + "", { headers: { "Authorization": `Bearer ${tokenStr}` } })
                        .then(function (response2) {

                            console.log(response2);
                        });
                    console.log(response);
                    alert('success. transaction ref is ' + response.reference);
                },
                onClose: function () {
                    alert('window closed');
                }
            });
            handler.openIframe();
        },
        sendNotification(name, telnumber) {
            telnumber = telnumber.substr(1);
            let message = "Dear " + name + ", Welcome to Altara Credit Limited. You are required to bring the following documents. 1. Proof of ID, 2. Passport Photo (2), 3. Utility bill(Nepa, Not later than 3 months), 4. Six Months Bank Statement till date,  5. Gurantor's cheque.";
            axios.get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to=" + 234 + telnumber + "&text=" + message + "")
                .then(function (response2) {

                    console.log(response2);
                    if (response2.status == 200) {
                        updateRemark(Updata)
                    } else {
                        app.errorMessage = "Error Sending Message, Contact Support";
                    }
                });
        }
    }
});



// UPDATE orders
//         INNER JOIN
//     customers ON customers.id = orders.customer_id
// SET
//     orders.repayment_amount = orders.repayment_amount * 2

//     Where customers.employment_status='formal' AND (((orders.repayment_amount*6) + orders.down_payment) < orders.product_price) AND orders.order_date < '2019-07-08'


// UPDATE orders
//         INNER JOIN
//     customers ON customers.id = orders.customer_id
// SET
//     orders.repayment_amount = orders.repayment_amount / 2

//      Where customers.employment_status='Informal(business)' AND (((orders.repayment_amount*12) + orders.down_payment) > (orders.product_price + 1))


// SELECT (FLOOR(repayment_amount/200)*100)*2 FROM `orders` WHERE `customer_id`='3884'


// UPDATE orders
//         INNER JOIN
//     customers ON customers.id = orders.customer_id
// SET
//     orders.repayment_amount = (FLOOR(repayment_amount/200)*100)*2

//     Where customers.employment_status='formal' AND orders.order_date < '2019-07-08'
