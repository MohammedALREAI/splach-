// import { ButtonWithIcons } from 'Component/ItemCard/ButtonF';
import { Column } from 'Component/widget/Column';
import { Row } from 'Component/widget/Row';
import InfoIcon from '@mui/icons-material/Info';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function ImageDetails() {
  return (
    <Row>
      <Row>
        {/* <ButtonWithIcons
          icon={
            <Row>
              <InfoIcon />
              <p>Info</p>
            </Row>
          }
        />
        <ButtonWithIcons
          icon={
            <Row>
              <ShortcutIcon />
              <p>Share</p>
            </Row>
          }
        />
        <ButtonWithIcons icon={<MoreHorizIcon />} /> */}
      </Row>
      <Row>
        <Column>
          <Row>Views</Row>
          <Row>--</Row>
        </Column>
        <Column>
          <Row>Downloads</Row>
          <Row>--</Row>
        </Column>
        <Column>
          <Row>Featured in</Row>
          <Row>Editorial</Row>
        </Column>
      </Row>
    </Row>
  );
}
