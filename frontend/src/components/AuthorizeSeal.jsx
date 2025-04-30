import React from 'react';

const AuthorizeSeal = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <!-- (c) 2005, 2025. Authorize.Net is a registered trademark of CyberSource Corporation -->
          <div class="AuthorizeNetSeal">
            <script type="text/javascript" language="javascript">
              var ANS_customer_id = "a3a5c06e-7d73-4d8e-bc10-689e99e27bf0";
            </script>
            <script type="text/javascript" language="javascript" src="https://verify.authorize.net:443/anetseal/seal.js"></script>
          </div>
        `,
      }}
    />
  );
};

export default AuthorizeSeal;
