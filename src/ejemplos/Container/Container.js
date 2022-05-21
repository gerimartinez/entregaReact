import "./Container.css"

export const Container = ( {children} ) => {

    return (
        <div className="myContainer">
            {children}            
        </div>  
        
    )
}