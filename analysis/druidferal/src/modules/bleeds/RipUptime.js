import { t } from '@lingui/macro';
import { formatPercentage } from 'common/format';
import SPELLS from 'common/SPELLS';
import { SpellLink } from 'interface';
import { TooltipElement } from 'interface';
import UptimeIcon from 'interface/icons/Uptime';
import Analyzer from 'parser/core/Analyzer';
import Enemies from 'parser/shared/modules/Enemies';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';
import React from 'react';
import { ThresholdStyle } from 'parser/core/ParseResults';

class RipUptime extends Analyzer {
  get uptime() {
    return this.enemies.getBuffUptime(SPELLS.RIP.id) / this.owner.fightDuration;
  }

  get suggestionThresholds() {
    return {
      actual: this.uptime,
      isLessThan: {
        minor: 0.95,
        average: 0.9,
        major: 0.8,
      },
      style: ThresholdStyle.PERCENTAGE,
    };
  }

  static dependencies = {
    enemies: Enemies,
  };

  suggestions(when) {
    when(this.suggestionThresholds).addSuggestion((suggest, actual, recommended) =>
      suggest(
        <>
          Your <SpellLink id={SPELLS.RIP.id} /> uptime can be improved. You can refresh the DoT once
          it has reached its{' '}
          <TooltipElement content="The last 30% of the DoT's duration. When you refresh during this time you don't lose any duration in the process.">
            pandemic window
          </TooltipElement>
          , don't wait for it to wear off.
          {!this.selectedCombatant.hasTalent(SPELLS.SABERTOOTH_TALENT.id) ? (
            <>
              {' '}
              Avoid spending combo points on <SpellLink id={SPELLS.FEROCIOUS_BITE.id} /> if{' '}
              <SpellLink id={SPELLS.RIP.id} /> will need refreshing soon.
            </>
          ) : (
            <></>
          )}
        </>,
      )
        .icon(SPELLS.RIP.icon)
        .actual(
          t({
            id: 'druid.feral.suggestions.rip.uptime',
            message: `${formatPercentage(actual)}% uptime`,
          }),
        )
        .recommended(`>${formatPercentage(recommended)}% is recommended`),
    );
  }

  statistic() {
    return (
      <Statistic position={STATISTIC_ORDER.CORE(4)} size="flexible">
        <BoringSpellValueText spell={SPELLS.RIP}>
          <>
            <UptimeIcon /> {formatPercentage(this.uptime)}% <small>uptime</small>
          </>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default RipUptime;
