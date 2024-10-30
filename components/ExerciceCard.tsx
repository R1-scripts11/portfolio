import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MdContentCopy } from "react-icons/md";
import { Modal } from '@/components/ui/Modal';

function ExerciceCard ({Title,
    Consigne,
    Reponse,
    InputType,
    Explication
}: {
    Title: string;
    Consigne: string;
    Reponse: string;
    InputType: string;
    Explication: string;
}) {

    const [code, setCode] = useState<string>(''); //Code dans le text Area
    const [input , setInput] = useState<string>(''); //Entrez de la variable
    const [resultat, setResultat] = useState<string>('') //Résultat de l'éxécution du code
    const [voirRéponse, setVoirRéponse] = useState<boolean>(false) 
    const [copySuccess, setCopySuccess] =  useState<string>("");// Pour stocker le résultat du copié coller

    //Fonction pour executer le code.
    function executeCode () {
        const userFonction = new Function('var', code)  //Création de la fonction depuis le code.

        try {                                           // TRY CATCH EN CAS D'ECHEC D'EXECUTION DE LA FONCTION.
            const resultatExec = userFonction(input)
            setResultat(`Résultat : ${resultatExec}`);
        } catch (error) {
            setResultat('Erreur d\'execution du code.')
        }
    }

    function _voirReponse (){
        if(voirRéponse == false){
            setVoirRéponse(true)
        }else{
            setVoirRéponse(false);
        }
    }

    const copyToClipboard = async (codeString : string) => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopySuccess('Copié!');
            setTimeout(() => setCopySuccess(''), 2000); // Réinitialise le message après 2 secondes
        } catch (err) {
            setCopySuccess('Échec de la copie');
        }
    };

    return(
        <>
            <div className="bg-slate-400 rounded overflow-hidden shadow-lg">
    
                    <div className="p-2"> 
                        <h2 className="text-black text-center text-xl underline ">{Title}</h2>
                        <p className="text-black hover:text-blue-600">{Consigne}</p>
                    </div>

                    <div className='grid p-2'>
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            rows={4}
                            cols={50}
                            className="rounded col-span-2"
                        />

                        <div className='col-span-2 flex items-center space-x-4'>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="rounded p-2 mt-2 h-75"
                            />
                            {resultat && <div className="rounded bg-white-100 h-75 p-2 mt-2">{resultat}</div>}
                        </div>
                    </div>

                    <div className="p-2 grid grid-cols-2 gap-2">
                        <button onClick={executeCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 col-span-1">Exécuter le code</button>
                        <button onClick={_voirReponse} className={`${ voirRéponse ? "bg-orange-500 hover:bg-orange-700" : "bg-green-500 hover:bg-green-700"} text-white font-bold rounded p-2 col-span-1`}>{voirRéponse ? "Masquer réponse" : "Voir réponse"}

                        </button>
                        {voirRéponse && (
                        <>
                            <div className="col-span-2">
                                <div className="flex rounded bg-gray-700 h-75 p-2 w-full">

                                    <SyntaxHighlighter language="javascript" style={nightOwl} className="w-full">
                                        {Reponse}                                                                            
                                    </SyntaxHighlighter>
                                        <button
                                            onClick={() => copyToClipboard(Reponse)}
                                            className="text-white font-bold py-1 px-4"
                                            style={{ background: "rgb(1, 22, 39)" }}
                                        >
                                        {copySuccess ? ( <p className="text-green-500 mt-2">{copySuccess}</p> ) : ( <MdContentCopy size={20} />)} 
                                        </button>  
                                                                           
                                </div>                                                
                            </div>         
                            <Modal Explication={Explication}/>    
                         </>             
                        )}
                    </div>

            </div>
        </>
    )
}

export default ExerciceCard