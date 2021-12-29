import { Row } from '../widget/Row'
import Button from '@mui/material/Button'
import ReplyIcon from '@mui/icons-material/Reply'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Popover from '@mui/icons-material/ErrorOutline'
import Tooltip from '@mui/icons-material/Tooltip'
import { Typography } from '../widget/Typography'

export const ImageInfo = () => {
    return (
        <Row>
            <Row>
                <Button variant = "outline" startIcon={ <ReplyIcon />}>Share</Button>
                <Button variant = "outline" startIcon={ <ErrorOutlineIcon />}>Share</Button>
                <Popover
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                >
            <Tooltip>
                <Button color="error">
                    Report
                </Button>
            </Tooltip>
            </Popover>
            </Row>
            <Row>
                <Row>

                </Row>
            </Row>
        </Row>
    )
}
