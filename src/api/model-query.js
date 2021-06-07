const userProfile = username => `query{v2UserProfile(username: "${username}") {
  latestRanks {
    mmcRank
    prevMmcRank
    prevRank
    rank
  }
  latestRoundPerformances {
    correlation
    correlationWithMetamodel
    date
    mmc
    payoutPending
    payoutSettled
    roundNumber
    roundResolved
    selectedStakeValue
    weekPayoutSelection
  }
  dailyUserPerformances {
    payoutPending
  }
  totalStake
  username
}}`;

export default userProfile