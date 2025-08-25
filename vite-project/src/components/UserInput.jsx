export default function UserInput() {
  return <section id="user-input">
    <div className="input-group">
        <p>
            <label htmlFor="investment-amount">Initial Investment Amount</label>
            <input type="number" id="investment-amount" required />
        </p>
        <p>
            <label htmlFor="investment-duration">Annual Investment Amount (yearly)</label>
            <input type="number" id="investment-duration" required />
        </p>
    </div>
        <div className="input-group">
        <p>
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" id="expected-return" required />
        </p>
        <p>
            <label htmlFor="duration">Duration</label>
            <input type="number" id="duration" required />
        </p>
    </div>
  </section>;
}
