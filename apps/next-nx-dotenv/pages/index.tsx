
export function Index() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NEXT_PUBLIC_ENV_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE}</td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE_LOCAL</td>
            <td>{process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE_LOCAL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Index;
