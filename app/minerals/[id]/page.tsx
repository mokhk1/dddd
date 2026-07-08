import { SpecimenDetails } from '@/components/shared/specimen-details';

export default function MineralDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <SpecimenDetails id={params.id} kind="mineral" />;
}
