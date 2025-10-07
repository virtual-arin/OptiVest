import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <img
              src="/media/logo.png"
              alt="Optivest Logo"
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-600">
              &copy; 2025, Optivest Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-800 mb-2">Account</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Open demat account
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Minor demat account
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              NRI demat account
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Commodity
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Dematerialisation
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Fund transfer
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              MTF
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Referral program
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Contact us
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Support portal
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              How to file a complaint?
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Status of your complaints
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Bulletin
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Circular
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Z-Connect blog
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Downloads
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Philosophy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Press & media
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Careers
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Optivest Cares (CSR)
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Optivest.tech
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Open source
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-800 mb-2">Quick links</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Upcoming IPOs
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Brokerage charges
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Market holidays
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Economic calendar
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Calculators
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Markets
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Sectors
            </a>
          </div>
        </div>
        <div className="text-xs text-gray-500 space-y-4">
          <p>
            Optivest Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: [INZXXXXXXXXXX] CDSL/NSDL: Depository services through Optivest
            Broking Ltd. – SEBI Registration no.: [IN-DP-XXX-XXXX] Commodity
            Trading through Optivest Commodities Pvt. Ltd. MCX: [XXXXX]; SEBI
            Registration no.: [INZXXXXXXXXXX] Registered Address: Optivest
            Broking Ltd., [#Address Line 1, Address Line 2, City - Pin Code,
            State, India] For any complaints pertaining to securities broking,
            please write to complaints@optivest.com, for DP related issues to
            dp@optivest.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF.
          </p>

          <p>
            <strong>Investor Grievance and Dispute Resolution</strong>
            <br />
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p>
            <a href="#" className="text-blue-600 hover:underline">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            <strong>Important Investor Information</strong>
            <br />
            Investments in the securities market are subject to market risks;
            read all the related documents carefully before investing.
          </p>

          <p>
            <strong>Attention investors:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Stock brokers can accept securities as margins from clients only
              by way of pledge in the depository system w.e.f. September 01,
              2020.
            </li>
            <li>
              Update your e-mail and phone number with your stock broker /
              depository participant and receive OTP directly from the
              depository on your e-mail and/or mobile number to create a pledge.
            </li>
            <li>
              Check your securities / MF / bonds in the consolidated account
              statement issued by NSDL/CDSL every month.
            </li>
          </ul>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is a one-time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund, etc.), you need not undergo the same
            process again when you approach another intermediary."
          </p>
          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non-allotment, the funds will remain in
            your bank account.
          </p>
          <p>
            As a business, we don't give stock tips and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming to
            be part of Optivest and offering such services, please{" "}
            <a href="#" className="text-blue-600 hover:underline">
              create a ticket here
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
