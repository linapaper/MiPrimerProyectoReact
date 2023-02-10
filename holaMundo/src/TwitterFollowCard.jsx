export function TwitterFollowCard ({userName, name, isFollowing}) {
    const imgSrc = `https://unavatar.io/${username}`

    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img
          className='tw-followCard-avatar'
          alt="Avatar"
          src={imgSrc} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}