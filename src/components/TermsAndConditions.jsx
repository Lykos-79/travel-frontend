import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="mt-25 max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to Hum Nikle Gaddi Leke. These terms and conditions outline the
        rules and regulations for the use of our website...
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use the site if you do not agree...
      </p>
      <p className="mb-4">Trip bookings are non-transferable once confirmed.</p>
      <p className="mb-4">
        Participants must follow safety protocols at all times.
      </p>
      <p className="mb-4">
        All personal belongings are the responsibility of the participant.
      </p>
      <p className="mb-4">
        Disruptive behavior may lead to removal from the trip without refund.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Cancellation Policy
      </h2>
      <p className="mb-4 font-bold">
        No Refund shall be made with respect to the initial booking amount for
        any cancellations. However,
      </p>
      <p className="mb-4">
        If cancellations are made 30 days before the start date of the trip, 50%
        of the Advance amount will be charged as cancellation fees.
      </p>
      <p className="mb-4">
        If cancellations are made 15-30 days before the start date of the trip,
        75% of the Advance amount will be charged as cancellation fees.
      </p>
      <p className="mb-4">
        If cancellations are made within 0-15 days before the start date of the
        trip, 100% of the Advance amount will be charged as cancellation fees.
      </p>
      <p className="mb-4">
        In the case of unforeseen weather conditions or government restrictions,
        certain activities may be cancelled. No refund will be provided for the
        same.
      </p>

      {/* Add more sections as needed */}
    </div>
  );
};

export default TermsAndConditions;
