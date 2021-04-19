import React from 'react'
import { Typography, Container, Box } from '@material-ui/core'
import { useStyles } from './Style.jsx'

function privacyPolicy() {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='md'>
      <Box pb={12.6}>
        <Typography className={classes.head1} component='h1' variant='h5'>
          Privacy Policy
        </Typography>

        <Typography className={classes.revision} component='p'>
          Revised April 5,2021
        </Typography>
        <p>
          Welcome to the Find Yours website or the Find Yours mobile application (“Site”). Your
          portal to the best available seat in the house! The Site is owned and operated by Find
          Yours, INC (“Find Yours”). This Privacy Policy describes what information we gather from
          you, how we use and disclose that information and what we do to protect it.
        </p>
        <p>
          When you use our Site, you trust us with your personal information. In this privacy
          notice, we seek to explain to you in the clearest way possible what information we
          collect, how we use it and what rights you have in relation to it. If there are any terms
          in this privacy policy that you do not agree with, please discontinue using our Site.
        </p>

        <p>
          This privacy policy applies to all information collected through our Site, Short Message
          Service (SMS), embedded in a partner’s website and mobile application, various social
          media platforms and any sales and marketing related services (together, “Site”). By using
          any of these services, you expressly consent to the information handling practices
          described in this policy. Links from our Site or service to third party sites are provided
          for your convenience. Personal information you provide to such third parties will be
          governed by that party’s privacy policy and not by Find Yours. Find Yours is not
          responsible for the privacy practices of these other websites.
        </p>
      </Box>
    </Container>
  )
}

export default privacyPolicy
