import React, { useState } from 'react';

const hotData = [
  { state: "CT", range: [[606, 699]], ob: 1, origin: "BETPA T" },
  { state: "NY", range: [[635, 635]], ob: 1, origin: "BETPAT" },
  { state: "NJ", range: [[703, 799], [860, 899]], ob: 1, origin: "PARNJ T" },
  { state: "NC", range: [[1009, 1189]], ob: 1, origin: "PARNJ T" },
  { state: "NC", range: [[2711, 2782], [2791, 2799], [2801, 2810], [2811, 2840], [2860, 2891]], ob: 4, origin: "GRENCN" },
  { state: "SC", range: [[2910, 2941], [2950, 2950]], ob: 4, origin: "CAHSCT" },
  { state: "GA", range: [[2960, 2992]], ob: 4, origin: "GRENCN" },
  { state: "FL", range: [[3148, 3160], [3200, 3230], [3321, 3321], [3343, 3350]], ob: 10, origin: "JACFL N" },
  { state: "KY", range: [[3491, 3491]], ob: 1, origin: "JACFL D" },
  { state: "OH", range: [[4022, 4022], [4029, 4029]], ob: 7, origin: "BLUKY P LCHKY P" },
  { state: "OH", range: [[4369, 4369]], ob: 7, origin: "TOLOH P" },
  { state: "OH", range: [[4519, 4529]], ob: 7, origin: "SHAOH P CINOH P" },
  { state: "OH", range: [[4539, 4549]], ob: 7, origin: "WCAOH P DAYOH P" },
  { state: "IN", range: [[4601, 4601], [4624, 4624], [4629, 4629], [4770, 4770]], ob: 8, origin: "ANDIN P, CASIN P, EVNIN P, I81IN P" },
  { state: "IN", range: [[4619, 4619]], ob: 5, origin: "16IN P" },
  { state: "IN", range: [[4628, 4628]], ob: 3, origin: "FLDIN P" },
  { state: "MI", range: [[4514, 4514]], ob: 6, origin: "MARWI P" },
  { state: "MI", range: [[4807, 4809]], ob: 10, origin: "4807 P MHEMIP" },
  { state: "MI", range: [[4822, 4830]], ob: 10, origin: "WOOMIP CICMIP" },
  { state: "MI", range: [[4850, 4860]], ob: 10, origin: "FLIMIP SAGMIP" },
  { state: "MI", range: [[4890, 4890]], ob: 10, origin: "LANMI P" },
  { state: "MI", range: [[4920, 4922]], ob: 10, origin: "JACMI P ADRMI P" },
  { state: "IA", range: [[5010, 5010], [5039, 5039], [5079, 5079]], ob: 3, origin: "WTEIA P" },
  { state: "WI", range: [[5220, 5260]], ob: 3, origin: "DAVIA N" },
  { state: "WI", range: [[5380, 5390], [5414, 5449], [5459, 5469]], ob: 6, origin: "OAKWIN" },
  { state: "MN", range: [[5549, 5549], [5599, 5599]], ob: 1, origin: "MINMN P MGRMN P" },
  { state: "IL", range: [[6200, 6245], [6265, 6265], [6280, 6290]], ob: 8, origin: "DECILN" },
  { state: "MO", range: [[6300, 6330]], ob: 4, origin: "EARMO S" },
  { state: "AR", range: [[6357, 6357]], ob: 4, origin: "EARMO S" },
  { state: "AR", range: [[7229, 7229], [7270, 7270]], ob: 5, origin: "LITART" },
  { state: "TX", range: [[7500, 7512], [7519, 7529], [7619, 7619], [7687, 7699], [7800, 7884], [7864, 7864], [7880, 7884]], ob: 10, origin: "INDTX N" },
  { state: "TX", range: [[7999, 7999]], ob: 7, origin: "EPATX P" },
  { state: "ID", range: [[8363, 8363], [8367, 8367], [8379, 8379]], ob: 4, origin: "NAPID P, MRIID P, BOIID P" },
  { state: "AZ", range: [[8472, 8472]], ob: 1, origin: "GDRAZ N" },
  { state: "NV", range: [[8643, 8643]], ob: 3, origin: "LVENV P" },
  { state: "NV", range: [[8909, 8909], [8919, 8919]], ob: 4, origin: "LASNV P, LVENV P" },
  { state: "NV", range: [[8913, 8913]], ob: 3, origin: "8913 P" }
];

const checkSLIC = (slic) => {
  const parsed = parseInt(slic);
  for (const item of hotData) {
    for (const [start, end] of item.range) {
      if (parsed >= start && parsed <= end) {
        return { status: "HOT", ob: item.ob, origin: item.origin };
      }
    }
  }
  return { status: "COLD", ob: null, origin: null };
};

export default function TwilightHotsChecker() {
  const [slic, setSlic] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const res = checkSLIC(slic);
    setResult(res);
  };

  return (
    <div style={{ backgroundColor: '#4b2e24', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#5d3b2e', borderRadius: '15px', padding: '40px', boxShadow: '0 0 20px rgba(0,0,0,0.5)', textAlign: 'center' }}>
        <h1 style={{ color: 'yellow', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', textShadow: '2px 2px black' }}>TWILIGHT HOTS</h1>
        <input
          type="text"
          placeholder="Enter SLIC"
          value={slic}
          onChange={(e) => setSlic(e.target.value)}
          style={{ padding: '10px', fontSize: '1rem', marginBottom: '20px', border: '2px solid yellow', borderRadius: '8px', backgroundColor: '#4b2e24', color: 'white', textAlign: 'center' }}
        />
        <br />
        <button
          onClick={handleCheck}
          style={{ padding: '10px 20px', fontSize: '1rem', border: '2px solid yellow', borderRadius: '8px', backgroundColor: '#2f2f2f', color: 'yellow', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Check Status
        </button>
        {result && (
          <div style={{ marginTop: '20px', color: 'white' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: result.status === 'HOT' ? 'red' : 'blue' }}>{result.status}</p>
            {result.status === "HOT" ? (
              <>
                <p>Outbound: {result.ob}</p>
                <p>Load Origin: {result.origin}</p>
              </>
            ) : (
              <p>This SLIC does not match any in the list.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
