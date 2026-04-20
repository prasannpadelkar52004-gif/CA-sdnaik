import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})

  export class About {

  showMore: boolean = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
  }

  whyItems = [
    {
      icon: '/images/confidential.png',
      title: 'Confidentiality',
      desc: 'We treat your data as state secrets – totally access-controlled and bound by NDAs.'
    },
    {
      icon: '/images/cost saving.png',
      title: 'Cost Savings',
      desc: 'Enjoy 40–50% cost savings without compromising quality or deadlines.'
    },
    {
      icon: '/images/timezone.png',
      title: 'Time Zone',
      desc: 'India’s time zone provides a round-the-clock service advantage to global clients.'
    },
    {
      icon: '/images/datasecurity.png',
      title: 'Data Security',
      desc: '3-tier security—physical, digital, and personal.'
    }
  ];


associates = [
  {
    name: 'Thakur Naik & Deo',
    sub: 'Chartered Accountants',
    desc: `Established in 1983, the firm specializes in Statutory Audit,
    Internal Audit, statutory compliances, business structuring.`,
    points: [
      '4 Chartered Accountants',
      '20 Audit & Tax Assistants',
      '35 Qualified & Semi-Qualified Staff'
    ],
    collapseId: 'assoc1',
    title: 'Founder Partners',
    partners: [
      {
            name: 'CA Sunil D Naik',
            desc: `FCA, ACS, Grad. CWA, Arbitrator (ICAI)<br>
            Holding certificate of practice since 1982. Heads business
            development and advisory services including real estate
            financial structuring.`
          },
          {
            name: 'CA Sudip D Thakur',
            desc: 'FCA, DISA (ICAI)<br>Practicing since 1981. Specialized in Sales Tax, VAT, Service Tax and Companies Act compliances.'
          },
            {
        name: 'CA Sunil D Naik',
        desc: 'FCA, LLB (G)<br>Practicing since 1983. Heads Bank Audit division and provides consultancy in Direct & Indirect Taxation.'
      }
    ]
  },
  
{
  name: 'Kapure & Kapure',
  sub: 'Chartered Accountants',
  desc: 'A professionally managed firm offering RERA, taxation, audit,corporate finance and regulatory services with a proactive approach.',
  points: [
    '5 Chartered Accountants',
    '6 Audit Assistants',
    '15 Qualified & Semi-Qualified Staff'
  ],
  collapseId: 'assoc2',
  title: 'Partners',
  partners: [{
  name: 'CA Sumit Kapure (Founder Partner)',
  desc: 'Specialized in RERA, Company Law & Income Tax. Works as full-time RERA consultant and faculty at ICAI seminars.'
},
   
{
  name: 'CA Rohit Kapure (Founder Partner)',
  desc: 'Specialized in Tax Audits, Bank Audits, International Taxation and Income Tax litigation.'
},

{
  name: 'CA Rahul Punmiya',
  desc: 'GST compliance, advisory, litigation and statutory audits.'
},

{
  name: 'CA Kalyani Kapure',
  desc: 'Specialized in Trusts, ROC compliances and taxation.'
},

{
  name: 'CA Reema Punmiya',
  desc: ' Specialized in Trust audits, taxation and compliance services.'
}

]
},

  {
    name: 'RR Global Professionals',
    sub: 'Chartered Accountants',
   desc: 'Specializes in offshore accounting and audit support services tailored for CPAs and accounting firms.',
    points: [
      '2 Chartered Accountants',
      '5 Skilled Accounting Staff'
    ],
    collapseId: 'assoc3',
    title: 'View Founding Partners',
    partners: [
      { name: 'CA Reema Rahul Punmiya', desc: 'ICAI 2023. Specializes in Income Tax, GST, RERA, Companies Act compliance and business structuring.' },
      { name: 'CA Rahul Punmiya', desc: 'GST advisory, litigation, CFO services, business advisory and overseas outsourcing (US Market).'}
    ]
  }
];
  }