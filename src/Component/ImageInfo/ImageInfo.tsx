import { Row } from '../widget/Row';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import { Typography } from '../widget/Typography';
import { Column } from '../widget/Column';
import { CSSProperties } from 'styled-components';

const style1:CSSProperties = {
    background: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export const ImageInfo = () => {
    return (
        <Row style={style1}>
            <Row>
                <Column>
                <p>Views</p>
                <p>--</p>
                </Column>
                <Column>
                <p>Downloads</p>
                <p>240</p>
                </Column>
                <Column>
                <p>Featured in</p>
                <p>Editorial</p>
                </Column>
            </Row>
            <Row JC='flex-end' margin={'10px'} >
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
        </Row>
    )
}
