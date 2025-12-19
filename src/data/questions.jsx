export const assessmentQuestions = {
  strategy: [
    {
      id: "str_1",
      question: "Which areas of your business are you focusing on for digitalization?",
      type: "checkbox",
      options: [
        "Digitalizing channels of acquiring and engaging customers",
        "Digitalizing business operations, processes and technical infrastructure",
        "Digitalizing office operations to improve employee productivity",
        "None of the above"
      ]
    },
    {
      id: "str_2",
      question: "Do you use AI or ML in any of your business processes?",
      type: "radio",
      options: [
        "No plans",
        "In planning",
        "In implementation",
        "Already adopted"
      ]
    },
    {
      id: "str_3",
      question: "In which processes do you use AI or ML in your organization?",
      type: "checkbox",
      options: [
        "Customer acquisition, engagement and servicing",
        "Business operations and process automation",
        "Workplace productivity and collaboration",
        "Others"
      ]
    }
  ],

  operations: [
    {
      id: "ops_1",
      question: "What types of internet connectivity are available across your office locations?",
      type: "checkbox",
      options: [
        "Internet leased lines (ILL)",
        "Hybrid SD-WAN",
        "Enterprise Wi-Fi",
        "Broadband",
        "None of the above"
      ]
    },
    {
      id: "ops_2",
      question: "Secure email communication",
      type: "maturity"
    },
    {
      id: "ops_3",
      question: "Secure internet browsing activity",
      type: "maturity"
    },
    {
      id: "ops_4",
      question: "Cloud Firewall",
      type: "maturity"
    },
    {
      id: "ops_5",
      question: "Do you use IoT in your business operations?",
      type: "dropdown",
      options: ["Yes", "No", "Planning"]
    }
  ],

  workspace: [
    {
      id: "wrk_1",
      question: "What communication channels do you use to ensure digital collaboration?",
      type: "checkbox",
      options: [
        "Corporate intranet platform",
        "Emails",
        "WhatsApp Business",
        "Company paid mobile connections"
      ]
    },
    {
      id: "wrk_2",
      question: "Google Workspace",
      type: "maturity"
    },
    {
      id: "wrk_3",
      question: "HRMS for automating HR processes",
      type: "maturity"
    },
    {
      id: "wrk_4",
      question: "Microsoft 365",
      type: "maturity"
    }
  ],

  customers: [
    {
      id: "cus_1",
      question: "Do you use digital channels for promotion of products and services?",
      type: "maturity"
    },
    {
      id: "cus_2",
      question: "Which digital channels do you use to connect with customers 24x7?",
      type: "checkbox",
      options: [
        "Lead Management / Cloud Telephony",
        "Click2Call",
        "Voice Broadcast",
        "IVR",
        "Toll-Free number",
        "WhatsApp Business",
        "None of the above"
      ]
    }
  ]
};
