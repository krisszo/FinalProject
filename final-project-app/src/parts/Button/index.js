export default function Button({label}) {
    return (
        <div>
            <a
                     className="button button-primary button-wide-mobile button-sm" href="/#">
                      {label}
                    </a>
        </div>
    )
}
