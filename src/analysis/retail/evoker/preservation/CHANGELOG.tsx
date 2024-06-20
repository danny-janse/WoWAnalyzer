import { change, date } from 'common/changelog';
import { TALENTS_EVOKER } from 'common/TALENTS';
import { Trevor} from 'CONTRIBUTORS';
import SpellLink from 'interface/SpellLink';

export default [
  change(date(2024, 6, 19), <>Add <SpellLink spell={TALENTS_EVOKER.ENGULF_TALENT}/> to <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> modules</>, Trevor),
  change(date(2024, 6, 19), <>Implement <SpellLink spell={TALENTS_EVOKER.EXPANDED_LUNGS_TALENT}/> module</>, Trevor),
  change(date(2024, 6, 19), <>Remove <SpellLink spell={TALENTS_EVOKER.REWIND_TALENT}/> from <SpellLink spell={TALENTS_EVOKER.ENGULF_TALENT}/> module</>, Trevor),
  change(date(2024, 6, 19), <>Improve accuracy of T32 tier set module</>, Trevor),
  change(date(2024, 6, 17), <>Implement <SpellLink spell={TALENTS_EVOKER.ENGULF_TALENT}/> module</>, Trevor),
  change(date(2024, 6, 16), <>Add T32 tier set module</>, Trevor),
  change(date(2024, 6, 16), <>Split up linking normalizer files</>, Trevor),
  change(date(2024, 6, 16), <>Cleanup old tier sets</>, Trevor),
  change(date(2024, 6, 16), <>Re-enable Preservation and cleanup dead code</>, Trevor),
];
