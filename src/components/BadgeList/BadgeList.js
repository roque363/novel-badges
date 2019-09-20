import React from 'react'
import './badgeList.scss'

class BadgeItem extends React.Component {
  render() {
    return(
      <div className="badgeItem">
        <img
          className="badgeItem__avatar"
          src={this.props.badge.cover || "https://66.media.tumblr.com/bce6f07582df80a47c2adce923642744/tumblr_pl7iqav9lZ1u2xpn7o1_500.jpg"}
          alt={this.props.badge.title || "Cover"}/>
        <div>
          <h2>{this.props.badge.title || "Titulo"}</h2>
          <div className="badgeItem__footer">
            #{this.props.badge.author || "Autor"}
          </div>
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState('');
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.title}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result)
  }, [ badges, query ]);

  return { query, setQuery, filteredBadges }
}

function BadgeList (props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  return (
    <div className="badgeV2">
      <div className="form-group">
        <label>Filtrar Series</label>
        <input
          autoFocus
          className="form-control"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}/>
      </div>
      {filteredBadges.length === 0 && (
        <h3>No se encontro ninguna serie</h3>
      )}
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return(
            <li key={badge.id}>
              <BadgeItem badge={badge}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BadgeList;
