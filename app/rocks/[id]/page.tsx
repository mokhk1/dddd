import { SpecimenDetails } from '@/components/shared/specimen-details';

export default function RockDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <SpecimenDetails id={params.id} kind="rock" />;
}
