import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            {props.name? props.name : "TOTAL CUSTOMERS"}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.name=="Click to Open Windows"? "Days: 20"
             :props.name=="Send Bulk Message to"? "All Retailers"
             : "1,6k"
            }
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {props.name=="Send Bulk Message to"? "": <ArrowUpwardIcon color="success" />}
        <Typography
          variant="body2"
          sx={{
            mr: 1,
            mb: props.name=="Send Bulk Message to"? 3:0
          }}
        >
          {props.name=="Send Bulk Message to"? "": "16%"}
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          {props.name=="Send Bulk Message to"?"":"Since last month"}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
