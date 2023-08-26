    export default {
        tabs: [
            {
                label: "Pending/Unpaid",
                key: "transaction_pending",
                value: 54,
                color: "rgba(237, 128, 32, 1)",
            },
            {
                label: "Approved/Paid",
                key: "transaction_approved",
                color: "gba(33, 150, 83, 1)",
                value: 54,
            },
            {
                label: "Rejected",
                key: "failed",
                color: "rgba(235, 87, 87, 1)",
                value: 54,
            },
        ],
        headers: {
            transaction_pending: [
                {
                    text_1: "Broker's Name",
                    text_2: "Contact",
                    align: "center",
                    sortable: false,
                    value: "clientDetail_split",
                },
                {
                    text_1: "Client Name",
                    text_2: "Contact",
                    align: "center",
                    sortable: false,
                    value: "vendor_assign_date",
                },
                {
                    text: "Project Name",
                    align: "center",
                    sortable: false,
                    value: "service_category_split",
                },
                {
                    text: "Project Manager",
                    align: "center",
                    sortable: false,
                    value: "full_address",
                },
                {
                    text: "Visit Date",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                {
                    text: "Upi Id",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                {
                    text: "Amount",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                {
                    text: "Actions",
                    align: "center",
                    sortable: false,
                    value: "action",
                },
            ],
            transaction_approved: [
                {
                    text_1: "Broker's Name",
                    text_2: "Contact",
                    align: "center",
                    sortable: false,
                    value: "clientDetail_split",
                },
                {
                    text_1: "Client Name",
                    text_2: "Contact",
                    align: "center",
                    sortable: false,
                    value: "vendor_assign_date",
                },
                {
                    text: "Project Name",
                    align: "center",
                    sortable: false,
                    value: "service_category_split",
                },
                {
                    text: "Project Manager",
                    align: "center",
                    sortable: false,
                    value: "full_address",
                },
                {
                    text: "Visit Date",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                {
                    text_1: "Upi Id",
                    text_2: "Payment Date",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                {
                    text: "Amount",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                // {
                //     text: "Actions",
                //     align: "center",
                //     sortable: false,
                //     value: "action",
                // },
            ],
            failed: [
                {
                    text_1: "Broker's Name",
                    text_2: "Contact",
                    align: "center",
                    sortable: false,
                    value: "clientDetail_split",
                },
                {
                    text_1: "Client Name",
                    text_2: "Contact",
                    align: "center",
                    sortable: false,
                    value: "vendor_assign_date",
                },
                {
                    text: "Project Name",
                    align: "center",
                    sortable: false,
                    value: "service_category_split",
                },
                {
                    text: "Project Manager",
                    align: "center",
                    sortable: false,
                    value: "full_address",
                },
                {
                    text: "Visit Date",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                {
                    text: "Upi Id",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
                {
                    text: "Amount",
                    align: "center",
                    sortable: false,
                    value: "additional_note",
                },
            ]
        }
};