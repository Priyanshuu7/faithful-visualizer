import React from "react";

const TermsConditions = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background px-4 py-12">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="font-saonara text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
          Terms & Conditions
        </h1>
        <h2 className="font-saonara text-2xl font-semibold mt-8 mb-3 text-black">Galaxies Photography and Film Productions</h2>
        <div className="space-y-8 text-gray-700 font-inter text-lg md:text-xl">
          <div>
            <h3 className="font-saonara text-black mb-2">1. Fees & Payment</h3>
            <ul className="list-disc font-saonara list-inside space-y-2">
              <li>A non-refundable deposit is required to secure your booking.</li>
              <li>The remaining balance is payable on the day of the photoshoot, either in cash or via the same payment method used for the deposit.</li>
              <li>Our package fees include photography, videography (if chosen), and editing services only. Personal expenses such as travel, accommodation, food, location entry tickets, or other incidentals, are not included and are the client's responsibility.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-saonara text-black mb-2">2. Cancellation & Rescheduling</h3>
            <ul className="list-disc font-saonara list-inside space-y-2">
              <li><strong className="font-saonara">Cancellation:</strong> All deposits are non-refundable. If Galaxies Photography and Film Productions may have to cancel the photoshoot for any reason, the full deposit will be refunded. If you cancel for any reason, the deposit will be retained, regardless of notice period.</li>
              <li><strong className="font-saonara">Rescheduling:</strong>
                <ul className="list-disc font-saonara list-inside ml-6 space-y-1">
                  <li>Rescheduling requests must be made well in advance and will be considered subject to our availability.</li>
                  <li>Postponing is allowed only until 3 months after the original shoot date.</li>
                  <li>If we are unavailable on the new date, the deposit remains non-refundable.</li>
                </ul>
              </li>
              <li><strong>Package Downgrade:</strong> Once a package is booked, it cannot be downgraded. Changes such as removing deliverables (e.g., videography), reducing shoot hours, or eliminating locations are not allowed. The full package amount will still apply.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-saonara text-black mb-2">3. Delivery Timeline</h3>
            <p>Final deliverables will be provided according to the workflow below. Delays in sharing your photo selections or music may lead to extended delivery timelines.</p>
          </div>
          <div>
            <h3 className="font-saonara text-black mb-2">4. Workflow</h3>
            <ol className="list-decimal font-saonara list-inside ml-4 space-y-1">
              <li>On the day of the photoshoot, all RAW photos will be shared via Google Drive once the full payment is received.</li>
              <li>You can then select your favorite images as per your chosen package (typically 50–60 photos).</li>
              <li>Edited photos will be delivered within 2 weeks of receiving your selections.</li>
              <li>Edited video will be delivered within 5–6 weeks from the day you provide your music preference.</li>
            </ol>
          </div>
          <div>
            <h3 className="font-saonara text-black mb-2">5. Location Permissions & Permits</h3>
            <ul className="list-disc font-saonara list-inside space-y-2">
              <li>Clients are responsible for obtaining and paying for any shooting permissions or location fees.</li>
              <li>We are happy to assist in arranging these, but final responsibility lies with the client.</li>
              <li>Permission fees mentioned (if any) are based on current rates and may change by the date of the shoot. Any increase will need to be covered by the client.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-saonara text-black mb-2">6. Unforeseen Situations</h3>
            <p className="font-saonara"> If a location is unexpectedly crowded, closed, or otherwise impacted by external factors (e.g., weather, construction, regulations), this will not affect the final cost of the shoot. We will adapt creatively, but such occurrences are beyond our control.</p>
          </div>
          <div>
            <h3 className="font-saonara text-black mb-2">7. Additional Services</h3>
            <p className="font-saonara">If you request any additional service beyond the agreed package (e.g., drone shots, extra edited photos, or reels), it will incur additional charges, which will be discussed and invoiced accordingly.</p>
          </div>
          <div>
            <h3 className="font-saonara text-black mb-2">8. Data Storage</h3>
            <p className="font-saonara">As part of our workflow, we provide clients with all RAW files for the purpose of final photo selection. Once the selection is received, we proceed with editing. After delivering the final edited images, we retain the RAW files for a few additional weeks to accommodate any requested changes. Once all edits are finalized and approved, the RAW data is permanently deleted shortly after. Final edited files are retained for up to 6 months. Clients are strongly encouraged to download and securely back up all final deliverables as soon as they are shared.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
