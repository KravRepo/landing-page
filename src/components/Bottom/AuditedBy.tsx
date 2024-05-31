import { Box, Typography } from '@mui/material';

export default function AuditedBy() {
  return (
    <Box
      display="grid"
      justifyItems={{ xs: 'left', sm: 'center' }}
      padding={{ xs: '40px 12px', md: '5rem 60px' }}
      borderTop="1px solid #000000"
      borderBottom="2px solid #000000"
    >
      <Typography
        textTransform={'uppercase'}
        variant="h5"
        fontSize={{ xs: 32, lg: 64 }}
        whiteSpace={'nowrap'}
      >
        Audited By
      </Typography>
      {/* add image ../../../public/salus.png */}
      <img src="/salus.png" alt="salus" style={{ height: '100px', marginTop: '50px' }} />
      {/* <Typography fontSize={{ xs: 14, md: 20 }} mt={32}>
        We will announce the auditor list later. Please stay tuned.
      </Typography> */}
    </Box>
  )
}
