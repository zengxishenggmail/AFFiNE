import { IconButton, MobileMenu } from '@affine/component';
import type { Collection } from '@affine/env/filter';
import { MoreHorizontalIcon, ViewLayersIcon } from '@blocksuite/icons/rc';

import { PageHeader } from '../../../components';
import { AllDocList } from '../doc/list';
import { AllDocsMenu } from '../doc/menu';
import * as styles from './detail.css';

export const DetailHeader = ({ collection }: { collection: Collection }) => {
  return (
    <PageHeader
      back
      suffix={
        <MobileMenu items={<AllDocsMenu />}>
          <IconButton
            size="24"
            style={{ padding: 10 }}
            icon={<MoreHorizontalIcon />}
          />
        </MobileMenu>
      }
    >
      <div className={styles.headerContent}>
        <ViewLayersIcon className={styles.headerIcon} />
        {collection.name}
      </div>
    </PageHeader>
  );
};

export const CollectionDetail = ({
  collection,
}: {
  collection: Collection;
}) => {
  return (
    <>
      <DetailHeader collection={collection} />
      <AllDocList collection={collection} />
    </>
  );
};