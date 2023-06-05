import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { SignIn, SignOut } from "./actions";
import { getSession } from "next-auth/react";

export default function Header() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const getSessionData = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    getSessionData();
  }, []);

  return (
    <header className={styles.signedInStatus}>
      <div className={styles.loaded}>
        {session ? (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
                className={styles.avatar}
              />
            )}
            <span className={styles.signedInText}>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <SignOut />
          </>
        ) : (
          <>
            <span className={styles.notSignedInText}>
              You are not signed in
            </span>
             <SignIn />
          </>
        )}
      </div>
    </header>
  );
}
