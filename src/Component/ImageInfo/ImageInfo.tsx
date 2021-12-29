import { Row } from '../widget/Row'
import Button from '@mui/material/Button'
import ReplyIcon from '@mui/icons-material/Reply'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Tooltip from '@mui/material/Tooltip'
import Popover from '@mui/material/Popover'

import { Typography } from '../widget/Typography'

export const ImageInfo = () => {
    return (
        <Row>
            <Row>
            <Button variant='outlined' startIcon={<ReplyIcon />}>
            Share
            </Button>
                <Button variant = 'outlined' startIcon={ <ErrorOutlineIcon />}>Share</Button>
                <Popover
                open={false}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
               >
                   <Tooltip title={'Report'} arrow>
                       <Button color='error'>Report</Button>
                   </Tooltip>
                </Popover>
            </Row>
            <Row>
                <Typography>Views</Typography>
                <Typography>Downloads</Typography>
                <Typography>Featured in</Typography>
            </Row>
            <Row>
                <Typography>--</Typography>
                <Typography>240</Typography>
                <Typography>Editorial</Typography>
            </Row>
        </Row>
    )
}
