import { Box } from '@mui/material'
import MarqueeBlue from '../Marquee/MarqueeBlue'
import AvailableNetwork from './AvailableNetwork'
import Connect from './Connect'
import Footer from '../Footer'
import Slides from './Slides'
import AuditedBy from './AuditedBy'

export default function Bottom() {
  return (
    <Box id="bottom">
      <MarqueeBlue />
      <AvailableNetwork />
      {/* <Slides /> */}
      <AuditedBy />
      <Connect />
      <Footer />
    </Box>
  )
}
